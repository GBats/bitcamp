import axios from "axios"
import { BOOKS_LIST_FAIL, BOOKS_LIST_REQUEST, BOOKS_LIST_SUCCESS } from "../constants"


const booksaction=()=> async (dispatch)=>{
  try {
      dispatch({type:BOOKS_LIST_REQUEST,payload:[]})
      const {data} = await axios.get("https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=10&startIndex=1");
      
      dispatch({type:BOOKS_LIST_SUCCESS,payload:data.items})
  } catch (error) {
      dispatch({type:BOOKS_LIST_FAIL,payload:error.message})
  }
}



export {booksaction}