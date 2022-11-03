const localStorage: Storage = window.localStorage || undefined;

export const getLocalStorage = (key: string) => {
  if (localStorage) {
    const value: string = localStorage.getItem(key.toLowerCase()) || "";
    return value && JSON.parse(value);
  }
};

export const setLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key.toLowerCase(), JSON.stringify(value));
};

export const clearLocalStorage = () => {
  localStorage?.clear();
};
