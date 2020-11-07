import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function FavoritesScreen(props) {
  const favorite = useSelector((state) => state.favorite);
  const { favoriteItems } = favorite;

  
  return favoriteItems.length===0?<div><h1 style={{textAlign:"center"}}>Empty Favorites List</h1></div>:<table className="table">
      <thead>
        <tr style={{color:"black"}}>
          <th>cover</th>
          <th>author</th>
          <th>title</th>
          <th>Page Count</th>
          <th>Publisher</th>
          <th>Publish Date</th>
        </tr>
      </thead>
      <tbody>
        {favoriteItems.map((item) => (
          <tr key={item.id}>
            <td>
              <Link to={"/details/" + item.id}>
                <img className="favorite-image"
                  src={
                    item.volumeInfo.imageLinks === undefined
                      ? ""
                      : `${item.volumeInfo.imageLinks.thumbnail}`
                  }
                  alt="img"
                />
              </Link>
            </td>
            <td>{item.volumeInfo.authors}</td>
            <td>{item.volumeInfo.title}</td>
            <td>{item.volumeInfo.pageCount}</td>
            <td>{item.volumeInfo.publisher}</td>
            <td>{item.volumeInfo.publishedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
                
}

export default FavoritesScreen;
