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
    return "Something went wrong, please check your email & password combination";
  }
};
