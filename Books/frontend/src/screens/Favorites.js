import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favRemoveAction } from "../actions/fetchData";

function Favorites(props) {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const removeHandle = (e, book) => {
    e.preventDefault();
    dispatch(favRemoveAction(book));
  };



  return favorites.fav.length === 0 ? (
    <div className="fav-screen">
      <h2>No Favorites</h2>
      <div>
        <Link to="/" className="back-to-result">
          back to result
        </Link>
      </div>
    </div>
  ) : (
    <div className="fav-screen">
      <div>
        <Link to="/" className="back-to-result">
          back to result
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>cover</th>
            <th>title</th>
            <th>autor</th>
            <th>published</th>
            <th className="action-title">action</th>
          </tr>
        </thead>
        <tbody>
          {favorites.fav.map((x) => (
            <tr className="fav-item" key={x._id}>
              <td>
                <Link to={"/details/"+x._id}><img src={x.image} alt="book" className="fav-img" /></Link>
              </td>
              <td className="title">{x.title}</td>
              <td>
                <p className="description">{x.author}</p>
              </td>
              <td>
                {x.publish}
              </td>
              <td>
                <button
                  className="fav-remove"
                  onClick={(e) => removeHandle(e, x)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;
