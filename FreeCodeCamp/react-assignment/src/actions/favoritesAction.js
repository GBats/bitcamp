import Cookies from "js-cookie";


const { FAV_DATA_SUCCESS } = require("../constants");

const addToFavorites = (item) => (dispatch, getState) => {
  
  try {
    dispatch({
      type: FAV_DATA_SUCCESS,
      payload: item
    });  
    const { favorite: { favoriteItems } } = getState();
    Cookies.set("favoriteItems",JSON.stringify(favoriteItems)) 
    
  } catch (error) {

  }

 
}


export { addToFavorites };
