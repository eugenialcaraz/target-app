export const signInRequest = async (body: object) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_SIGN_IN}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) throw new Error();
    const user = await response.json();
    return user;
  } catch (error) {
    return "Incorrect email or password";
  }
};

export const signUpRequest = async (body: object) => {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error();
    const user = await response.json();
    return user;
  } catch (error) {
    return "Something went wrong, please check your data";
  }
};

export const getGenders = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_GENDERS_URL, {
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
    return "Something went wrong, please check your data";
  }
};
