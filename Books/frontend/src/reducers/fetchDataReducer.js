import {
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from "../constants/fetchConstants";

function fetchDataReducer(state = { books: [] }, action) {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { loargin: true, books: [] };
    case BOOK_LIST_SUCCESS:
      return { loading: false, books: action.payload };
    case BOOK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function favDataReducer(state = { fav: [] }, action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      const item = action.payload;
      const book = state.fav.find((x) => x._id === item._id);

      if (book) {
        return {
          fav: state.fav.filter((x) => x._id !== action.payload._id),
        };
      }

      return {
        fav: [...state.fav, item],
      };
      case "REMOVE_FAV_BOOK":
        return {
          fav: state.fav.filter((x) => x._id !== action.payload)
       
        }

    default:
      return state;
  }
}

function bookDetailsReducer(state = { book: {} }, action) {
  switch (action.type) {
    case "BOOK_DETAILS_REQUEST":
      return { loading: true };
    case "BOOK_DETAILS_SUCCESS":
      return { loading: false, book: action.payload };
    case "BOOK_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { fetchDataReducer, favDataReducer,bookDetailsReducer };
