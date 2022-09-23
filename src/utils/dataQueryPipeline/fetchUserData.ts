import { ServiceFile } from "@corsali/userdata-extractor";

/**
 * Downloads the encrypted files specified in all the user modules provided
 * @param userModules
 * @param hasuraToken
 * @returns
 */
const fetchUserData = async (
  userModules: any[],
  hasuraToken: string,
): Promise<ServiceFile[]> => {
  const serviceFiles: ServiceFile[] = [];
  await Promise.all(
    userModules.map(async (userModule) => {
      const downloadUrl = await fetchSignedUrl(hasuraToken, userModule.id);
      const encryptedFile = await fetchZipFromUrl(downloadUrl);
      serviceFiles.push({
        serviceName: userModule.module.name.toLowerCase(),
        file: encryptedFile,
      });
    }),
  );
  return serviceFiles;
};

/**
 * Retrieve a download URL so we can download the user's encrypted file from GCS
 * @param hasuraToken
 * @param userModuleId
 * @returns
 */
const fetchSignedUrl = async (
  hasuraToken: string | null,
  userModuleId: string,
) => {
  if (!hasuraToken) {
    throw new Error(`Failed to fetch signed url: hasuraToken missing`);
  }

  const result = await fetch("/api/user-data/download-url", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${hasuraToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userModuleId,
    }),
  });

  if (result.status !== 200) {
    throw new Error(`Failed to fetch signed url: ${result.status}`);
  }

  const parsed = await result.json();

  if (!parsed?.success)
    throw new Error(`Failed to fetch signed url: ${result.status}`);
  else return parsed.signedUrl;
};

/**
 * Download's encrypted data a .zip.enc file
 * @param url location of data
 * @returns File.zip
 */
const fetchZipFromUrl = async (url: string): Promise<File> => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/zip",
    },
  });
  const blob = await res.blob();
  return new File([blob], "data.zip.enc", { type: "application/zip" });
};

export { fetchUserData };
