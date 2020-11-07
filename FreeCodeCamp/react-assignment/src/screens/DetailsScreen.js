import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DetailsScreen(props) {
  
  const booksList = useSelector(state=>state.booksList)
  const {books} = booksList;
  const bookId=props.location.pathname.replace("/details/","")
  const book  = books.find(item=>item.id==bookId)

 useEffect(()=>{
  
 },[])

  return (<div className="details-screen">
    <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details-image">
        <img
          src={
            book.volumeInfo.imageLinks === undefined
              ? ""
              : `${book.volumeInfo.imageLinks.thumbnail}`
          }
          alt="img"
        />
      </div>
      <div className="details-info">
        <div>
          <ul>
            <li>
              <h1>{book.volumeInfo.title}</h1>
            </li>
            <li>
              <span>by {book.volumeInfo.authors}</span>
            </li>
            <li>
              <strong>Category:</strong>
              <span style={{ color: "#00635d" }}>
                {book.volumeInfo.categories}
              </span>
            </li>
            <li>
              <strong>Publisher:</strong>
              <span style={{ color: "#00635d" }}>
                {book.volumeInfo.publisher}
              </span>
            </li>
            <li>
              <strong>Published Date:</strong>
              <span style={{ color: "#00635d" }}>
                {book.volumeInfo.publishedDate}
              </span>
            </li>
          </ul>
        </div>
        <div style={{ paddingLeft: "1rem" }}>
          <strong style={{ paddingLeft: "1rem" }}>Description:</strong>
          <span style={{ paddingLeft: "1rem", color: "#00635d" }}>
            {book.volumeInfo.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsScreen;
