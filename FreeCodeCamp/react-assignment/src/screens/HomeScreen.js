import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { booksaction } from "../actions/booksAction";
import { Link } from "react-router-dom";
import { addToFavorites } from "../actions/favoritesAction";



function HomeScreen(props) {
const booksList = useSelector((state) => state.booksList);
const { books, loading, error } = booksList;
const favorite = useSelector(state=>state.favorite);
const {favoriteItems} = favorite;

const style = {
  backgroundColor:"#00635d",
  color:"white"
}
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksaction());
  }, []);

 

const submitFavorite=(e,item)=>{
  e.preventDefault();
  dispatch(addToFavorites(item));
  
}


  return (
    <div className="content">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="books">
          {books.map((item) => (
            <li className="book" key={item.id}>
             
              <div className="main-img">
                <Link to={"/details/"+item.id}>
                  <img
                    src={
                      item.volumeInfo.imageLinks === undefined
                        ? ""
                        : `${item.volumeInfo.imageLinks.thumbnail}`
                    }
                    alt="img"
                  />
                </Link>
              </div>
              <div className="main-details">
                <div className="title" style={{marginTop:"1rem",marginLeft:"0.5rem"}}>
                  <p style={{height:"2.5rem"}}>
                    <strong>{item.volumeInfo.title}</strong>
                  </p>
                  {item.volumeInfo.authors.map((author, i) => (
                    <span key={i}>by {author}</span>
                  ))}
                </div>
                
                <div className="action">
                  <Link style={{padding:".5rem"}} to={"/details/"+item.id}> read more</Link>
                   
                   {favoriteItems.find(x=>x.id===item.id) ? 
                   <button className="fav-button" type="btn primary"  style={{ backgroundColor:"#2980b9",color:"#ffffff"}} onClick={(e)=>submitFavorite(e,item)}>Favorite</button>
                   :
                   <button className="fav-button" type="btn primary"  style={style} onClick={(e)=>submitFavorite(e,item)}>Add to Favorites</button>
                   }
                   </div>
              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomeScreen;
