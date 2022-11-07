import { getLocalStorage } from "@/utils";

export const isAuthenticated = () => {
  return getLocalStorage("user");
};
