enum HEAP_EVENTS {
  LOGOUT = "Logout",
  LOGIN = "Login",
  SHARE_APPROVED = "Share Approved",
  SHARE_CANCELLED = "Share Cancelled",
  CLICK_ADD_DATA = "Click Add Data",
  CLICK_ADD_GOOGLE = "Click Add Google Data",
  CLICK_ADD_FACEBOOK = "Click Add Facebook Data",
  CLICK_ADD_INSTAGRAM = "Click Add Instagram",
  CLICK_DELETE_VAULT = "Click Delete Vault",
  CLICK_DATA_DELETE_MODAL_CANCEL = "Click Cancel Data Delete Modal",
  CLICK_DATA_DELETE_MODAL_CONFIRM = "Click Cancel Data Delete Modal",
  DATA_STORED = "Data Stored",
  DATA_DELETED = "Data Deleted",
}

export default {
  HEAP_EVENTS,
  HEAP_API_URL: process.env.NEXT_PUBLIC_HEAP_API_URL as string,
  HEAP_APP_ID: process.env.NEXT_PUBLIC_HEAP_APP_ID as string,
};
