export const getNavigationPermissions = async (setCurrentPosition) => {
  const result = await navigator.permissions.query({ name: "geolocation" });

  if (result.state === "denied") {
    throw new Error("Position permissions not allowed");
  }
  navigator.geolocation.getCurrentPosition(setCurrentPosition);
};
