import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { favAction, fetchDataAction } from "../actions/fetchData";
import {Link} from 'react-router-dom'


function HomeScreen(props) {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.booksList);
  const { books, loading, error } = booksList;
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchDataAction());
    return () => {
      //
    };
  }, []);

  const favHandler = (id) => {
    dispatch(favAction(id));
  };

  return (
    <div className="books-container">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        books.map((x) => (
          <ul className="content" key={x.id}>
            <div className="book-info">
              <div className="book-image">
                <li>
                  <Link to={"/details/"+x.id}>
                  <img src={x.volumeInfo.imageLinks.thumbnail} alt="book" />
                  </Link>
                  
                </li>
              </div>
              <div className="book-details">
                <li>
                  <b>{x.volumeInfo.title}</b>
                </li>
                <li>
                  <p className="subtitle">{x.volumeInfo.subtitle}</p>
                </li>
                <li>
                  <p className="author">{x.volumeInfo.authors}</p>
                </li>
                <li>
                  <p className="publish-date">
                    Publish Date:{x.volumeInfo.publishedDate}
                  </p>
                </li>
              </div>
            </div>

            <div className="actions">
              {favorites.fav.find((y) => y._id === x.id) ? (
                <button className="fav-button" onClick={(e) => favHandler(x)}>
                  &#9733;
                </button>
              ) : (
                <button className="fav-button" onClick={(e) => favHandler(x)}>
                  &#x2606;
                </button>
              )}

                <Link to={"/details/"+x.id}>
                <button className="read-more-button">read more</button>
                </Link>
              
            </div>
          </ul>
        ))
      )}
    </div>
  );
}

export default HomeScreen;
