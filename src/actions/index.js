// The payload is the information that we transmitted to them
export const setFavorite = (payload) => ({
  // The type is a description about the action that we want to do
  type: "SET_FAVORITE",
  payload,
});
