export const signInRequest = async (body: object) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/sign-in`,
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
