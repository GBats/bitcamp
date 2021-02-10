import axios from "axios";
import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
} from "../constants/fetchConstants";

const fetchDataAction = () => async (dispatch) => {
  try {
    dispatch({ type: BOOK_LIST_REQUEST });
    const { data } = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=10&startIndex=1"
    );
    dispatch({ type: BOOK_LIST_SUCCESS, payload: data.items });
  } catch (error) {
    dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
  }
};


const favAction = (book) =>(dispatch, getState) => {
  try {
    dispatch({
      type: "ADD_TO_FAV",
      payload:  {
        _id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        publish: book.volumeInfo.publishedDate,
        image: book.volumeInfo.imageLinks.thumbnail,
      },
    });
   const {favorites:{fav}}=getState();
   localStorage.setItem("favorites",JSON.stringify(fav))
 
  } catch (error) {
    
  }
 
 
};

const favRemoveAction = (book) => (dispatch,getState) => {
  dispatch({
    type: "REMOVE_FAV_BOOK",
    payload: book._id,
  });

  const {favorites:{fav}}=getState();
  localStorage.setItem("favorites",JSON.stringify(fav));
};


const detailsAction=(bookId)=> async (dispatch,getState)=>{
 
  try {
    dispatch({ type: "BOOK_DETAILS_REQUEST", payload: bookId });
   
    const data = await axios.get("https://www.googleapis.com/books/v1/volumes/"+bookId)
    dispatch({ type: "BOOK_DETAILS_SUCCESS", payload: data.data});
    
    const {bookDetail:{book}}=getState();
    localStorage.setItem("detailsScreen",JSON.stringify(book))

  } catch (error) {
    dispatch({ type: "BOOK_DETAILS_FAIL", payload: error.message });
  }

}

export { fetchDataAction, favAction, favRemoveAction,detailsAction };
