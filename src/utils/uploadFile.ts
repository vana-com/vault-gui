import axios, { AxiosRequestConfig } from "axios";

type ProgressEvent = { loaded: number; total: number };
type ProgressHandler = (progressEvent: ProgressEvent) => void;

/**
 * Uploads a file to GCS or S3 for a particular module (ex. A user's Google data stored in a zip file)
 * @param file file(s)
 * @param moduleName module that the data will be attached to
 * @param externalId Wallet address of the user uploading data
 * @param progressHandler function to get upload progress events
 * @returns uploadSuccessful @bool uploadURL: @string
 */
const uploadFile = async (
  file: File,
  moduleName: string,
  externalId: string,
  encryptedPassword: string,
  progressHandler: ProgressHandler,
) => {
  const fileName = encodeURIComponent(file.name);

  try {
    // Get the pre-signed upload URL for GCS
    const res = await fetch(`/api/user-data/upload-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName,
        moduleName,
        externalId,
        encryptedPassword,
      }),
    });
    const { fullFileName, url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    // Use axois to send the file data, as fetch has no "onUploadProgress" handler
    const config: AxiosRequestConfig = {
      onUploadProgress: (progressEvent) => progressHandler(progressEvent),
    };
    const upload = await axios.postForm(url, formData, config);

    // GCP returns a 204 when an upload is successful
    const isOk = upload && upload.status === 204;

    return {
      uploadSuccessful: isOk,
      uploadURL: isOk ? `${url}${fullFileName}` : null,
    };
  } catch (error) {
    console.log(JSON.stringify(error));
    return { uploadSuccessful: false, uploadURL: null };
  }
};

export { uploadFile };
