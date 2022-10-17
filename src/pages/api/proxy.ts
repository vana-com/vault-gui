import type { NextApiRequest, NextApiResponse } from "next";

import { ApiResponse } from "src/types";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { url } = req.query;
  const { requestMethod, requestHeaders, requestBody } = req.body;
  if (!url) {
    res
      .status(400)
      .send({ success: false, error: "URL required" } as ApiResponse);
  }

  try {
    const resProxy = await fetch(url as string, {
      method: requestMethod ?? "GET",
      headers: requestHeaders as HeadersInit,
      body: JSON.stringify(requestBody),
    });

    res.status(resProxy.status).send(resProxy.body);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Problem getting API response: ${error}`,
    } as ApiResponse);
  }
};
