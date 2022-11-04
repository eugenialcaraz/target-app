import { UserType } from "@/types";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const requestedHeaders = ["access-token", "client", "expiry", "uid"];

export const signInRequest = async (body: object) => {
  try {
    const response = await fetch(`${BASE_URL}/users/sign_in`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error();
    const { user } = await response.json();
    requestedHeaders.map(
      (header) => (user[header] = response.headers.get(header))
    );
    return user;
  } catch (error) {
    throw new Error("Incorrect email or password");
  }
};

export const signUpRequest = async (body: object) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error();
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("Something went wrong, please check your data");
  }
};

export const logoutRequest = async (user: UserType) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/sign_out`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "access-token": user["access-token"],
          client: user["client"],
          expiry: JSON.stringify(user["expiry"]),
          uid: user["uid"],
        },
      }
    );
    if (!response.ok) throw new Error();
  } catch (error) {
    throw new Error("Error logging out");
  }
};

export const getGenders = async () => {
  try {
    const response = await fetch(`${BASE_URL}/valid_genders`, {
      headers: {
        "Content-type": "application/json",
        "access-token": import.meta.env.VITE_TOKEN,
        client: import.meta.env.VITE_CLIENT,
        uid: import.meta.env.VITE_REQUEST_EMAIL,
      },
    });
    if (!response.ok) throw new Error();
    const { genders } = await response.json();
    return genders;
  } catch (error) {
    throw new Error();
  }
};
