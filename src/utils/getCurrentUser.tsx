import { getLocalStorage } from "@/utils";

export const getCurrentUser = () => getLocalStorage("user");
