enum HEAP_EVENTS {
  // Clicks on the Add Data button, not for a specific module
  CLICK_ADD_DATA_BUTTON = "Click Add Data Button",
  // Clicks on panel to add data for a specific module
  CLICK_ADD_DATA_MODULE_PANEL = "Click Add Data Module Panel",
  CLICK_REQUEST_NEW_DATA_SOURCE = "Click Request New Data Source",
  CLICK_DELETE_VAULT = "Click Delete Vault",
  CLICK_VAULT_DELETE_MODAL_CANCEL = "Click Cancel Vault Delete",
  CLICK_VAULT_DELETE_MODAL_CONFIRM = "Click Confirm Vault Delete",
  CLICK_GIVE_FEEDBACK = "Click Give Feedback",
  CLICK_GET_HELP = "Click Get Help",
  CLICK_HOW_DOES_THIS_WORK = "Click How Does This Work",
  CLICK_ONBOARING_STAGE_THREE = "Click Onboarding Stage Three",
  CLICK_ONBOARING_STAGE_TWO = "Click Onboarding Stage Two",
  DATA_DELETED = "Data Deleted",
  DATA_STORED = "Data Stored",
  LOGIN = "Log in",
  LOGOUT = "Log out",
  SHARE_APPROVED = "Share Approved",
  SHARE_CANCELLED = "Share Cancelled",
}

export default {
  HEAP_EVENTS,
  HEAP_API_URL: process.env.NEXT_PUBLIC_HEAP_API_URL as string,
  HEAP_APP_ID: process.env.NEXT_PUBLIC_HEAP_APP_ID as string,
};
