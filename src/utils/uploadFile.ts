import axios, { AxiosRequestConfig } from "axios";

type ProgressEvent = { loaded: number; total: number };
type ProgressHandler = (
  progressEvent: ProgressEvent,
  fileIndex: number,
) => void;

/**
 * Uploads a file to GCS
 * @param file file
 * @param progressHandler function to get upload progress events
 * @returns uploadSuccessful @bool uploadURL: @string
 */
const uploadFile = async (
  file: File,
  fileIndex: number,
  timestamp: number,
  userEmail: string,
  progressHandler: ProgressHandler,
) => {
  const fileName = encodeURIComponent(file.name);
  const fileSize = file.size;

  try {
    // Get the pre-signed upload URL for GCS
    const res = await fetch(`/api/user-data/upload-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName,
        timestamp,
        userEmail,
      }),
    });
    const { fullFileName, url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    // Use axois to send the file data, as fetch has no "onUploadProgress" handler
    const config: AxiosRequestConfig = {
      onUploadProgress: (progressEvent) =>
        progressHandler(progressEvent, fileIndex),
    };
    const upload = await axios.postForm(url, formData, config);

    // GCP returns a 204 when an upload is successful
    const isOk = upload && upload.status === 204;

    return {
      uploadSuccessful: isOk,
      uploadURL: isOk ? `${url}${fullFileName}` : null,
      uploadFileName: fileName,
      uploadFileSize: fileSize,
    };
  } catch (error) {
    console.error("Unable to upload file", error);
    return { uploadSuccessful: false, uploadURL: null };
  }
};

export { uploadFile };
