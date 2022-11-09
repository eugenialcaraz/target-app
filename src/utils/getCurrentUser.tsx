import { getLocalStorage } from "@/utils";

export const getCurrentUser = () => {
  return getLocalStorage("user");
};
