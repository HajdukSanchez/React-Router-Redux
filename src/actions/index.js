// The payload is the information that we transmitted to them

// Add element from the list
export const setFavorite = (payload) => ({
  // The type is a description about the action that we want to do
  type: "SET_FAVORITE",
  payload,
});

// Delete element from the list
export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

// Add a user login request
export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

// Close session
export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

// Register user request
export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});
