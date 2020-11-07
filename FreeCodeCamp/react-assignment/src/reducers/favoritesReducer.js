const { FAV_DATA_SUCCESS } = require("../constants");

function favoriteReducer(state = { favoriteItems: [] }, action) {
  switch (action.type) {
    case FAV_DATA_SUCCESS:
      const item = action.payload;
      const book = state.favoriteItems.find(x => x.id === item.id);
      if (book) {
        return { favoriteItems: state.favoriteItems.filter(x => x.id !== action.payload.id) };
      }
      return { favoriteItems: [...state.favoriteItems, item]};
    default:
      return state;
  }
}



export { favoriteReducer};
