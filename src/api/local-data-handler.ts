import { Storage } from "./storage";
import { deleteCookie } from "./cookie-storage";
import { removeLocalStorageItem } from "./local-storage";

export const deleteLocalData = (options?: { redirectUrl?: string }) => {
  deleteCookie(Storage.token);
  deleteCookie(Storage.refresh_token);
  removeLocalStorageItem(Storage.current_user);
  removeLocalStorageItem(Storage.watchlist_select);
  removeLocalStorageItem(Storage.course_review);

  if (options?.redirectUrl) {
    window.location.href = options?.redirectUrl;
  } else {
    window.location.reload();
  }
};
