import { BOOKS_LIST_FAIL, BOOKS_LIST_REQUEST, BOOKS_LIST_SUCCESS } from "../constants";

function booksReducer(state={books:[]},action){
    switch (action.type) {
        case BOOKS_LIST_REQUEST:
          return { loading: true,books:[]};
        case BOOKS_LIST_SUCCESS:
          return { loading: false, books: action.payload };
        case BOOKS_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}



export {booksReducer}