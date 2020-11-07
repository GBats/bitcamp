import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from 'redux-thunk'
import { booksReducer} from "./reducers/booksReducer";
import Cookies from 'js-cookie'
import { favoriteReducer } from "./reducers/favoritesReducer";


const favoriteItems = Cookies.getJSON('favoriteItems') || [];
const initialState={favorite:{favoriteItems}}

const reducer=combineReducers({
    booksList:booksReducer,
    favorite:favoriteReducer,
    
    
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;