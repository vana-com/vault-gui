enum HEAP_EVENTS {
  LOGOUT = "Logout",
  LOGIN = "Login",
  SHARE_APPROVED = "Share Approved",
  SHARE_CANCELLED = "Share Cancelled",
  CLICK_ADD_DATA = "Click Add Data",
  DATA_STORED = "Data Stored",
  DATA_DELETED = "Data Deleted",
}

export default {
  HEAP_EVENTS,
  HEAP_API_URL: process.env.HEAP_API_URL as string,
  HEAP_APP_ID: process.env.HEAP_APP_ID as string,
};
