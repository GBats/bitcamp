import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsAction, favAction } from "../actions/fetchData";

function DetailsScreen(props) {
  const bookDetail = useSelector((state) => state.bookDetail);
  const { book, loading, error } = bookDetail;
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsAction(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const favHandler = (book) => {
    dispatch(favAction(book));
  };

  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="details-container">
      <ul className="details-screen">
        <div className="details-image">
          <li>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
          </li>
        </div>
        <div className="details-info">
          <li className="title">{book.volumeInfo.title}</li>
          <li className="subtitle">{book.volumeInfo.subtitle}</li>
          <li className="author">{book.volumeInfo.authors}</li>
          <li className="publish-date">{book.volumeInfo.publisdate}</li>
          <li className="details-description"><h5>Description:</h5><p>{book.volumeInfo.description}</p></li>
        </div>
        <div className="details-icon">
          <li className="details-fav-icon">
            {" "}
            {favorites.fav.find((y) => y._id === book.id) ? (
              <button
                className="details-fav-button"
                onClick={(e) => favHandler(book)}
              >
                &#9733;
              </button>
            ) : (
              <button
                className="details-fav-button"
                onClick={(e) => favHandler(book)}
              >
                &#x2606;
              </button>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
}

export default DetailsScreen;
