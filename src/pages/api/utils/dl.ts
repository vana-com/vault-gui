import type { NextApiRequest, NextApiResponse } from "next";
import request from "request";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const url = req.query.url as string;

  if (!url) {
    res.status(500).json({ error: "You must send a url" });
  }

  // Block obvious attempts to grab images not from gcs
  if (
    url.indexOf("https://storage.googleapis.com/data-collective-images") !== 0
  ) {
    res.status(401);
  }

  // set header
  res.setHeader(
    "content-disposition",
    "attachment; filename=vana_portrait.png",
  );

  await request
    .get(url) // download original image
    .on("error", (_: Error) => {
      res.status(404).json({ error: "content not found" });
      res.end();
    })
    .pipe(res); // pipe converted image to HTTP response
};
