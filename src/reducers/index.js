const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const list = state.myList.find((item) => item.id === action.payload.id); // Search the element into the list
      if (list) return { ...state }; // If the element is already in the list
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
