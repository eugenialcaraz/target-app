import { getLocalStorage } from "@/utils";

export const useAuth = () => {
  return getLocalStorage("user");
};
