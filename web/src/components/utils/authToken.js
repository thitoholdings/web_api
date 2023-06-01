export const getStoredAuthToken = () => localStorage.getItem("authToken");
export const getStoredUserInfo = () => localStorage.getItem("user");

export const storeAuthToken = (token) =>
  localStorage.setItem("authToken", token);

export const storeUserInfo = (user) => {
  localStorage.setItem("user", user);
};

export const removeStoredAuthToken = () => localStorage.removeItem("authToken");
export const removeStoredUserInfo = () => localStorage.removeItem("user");
