import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { favDataReducer, fetchDataReducer,bookDetailsReducer} from './reducers/fetchDataReducer'
import thunk from 'redux-thunk'


const fav=JSON.parse(localStorage.getItem("favorites")) || [];
const book=JSON.parse(localStorage.getItem("detailsScreen")) || {};


const initialState={favorites:{fav},bookDetail:{book}};



const reducer =combineReducers({
    booksList:fetchDataReducer,
    favorites:favDataReducer,
    bookDetail:bookDetailsReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;