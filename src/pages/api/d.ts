import type { NextApiRequest, NextApiResponse } from "next";

import {
  addAccountPropsToCallInServer,
  trackEventToCallInServer,
} from "src/utils";

/**
 * Heap Tracking Endpoint. Server side events are more reliable than
 * client side events since ad-blockers don't break them.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { userId, eventName, isAddAccountProps, properties } = req.body;

  const correctParamsForTypeOfEvent = isAddAccountProps
    ? userId
    : userId && eventName;

  const missingRequiredParams =
    isAddAccountProps === undefined || !correctParamsForTypeOfEvent;

  if (missingRequiredParams) {
    return res.status(400).json({
      message: "Missing required parameters",
    });
  }

  try {
    if (isAddAccountProps) {
      addAccountPropsToCallInServer(userId, properties);
    } else {
      trackEventToCallInServer(userId, eventName, properties);
    }

    return res.status(200).json({
      message: "Successfully received request",
    });
  } catch (error) {
    return res.status(500).json({
      // tracking was unsuccessful
      message: "Unable to successfully process request",
    });
  }
};
