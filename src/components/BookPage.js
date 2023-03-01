import React from 'react';
import 'react-router-dom';

function BookPage() {
   
  return (
    <div className="mini-container">
        <div className="mini-image">
             <img src={book?.img_url} alt=""/>
        </div>
        <h2>{ book?.name }</h2>
        <div className="mini-details">
            <p>Rarity: {book?.rarity}</p>
            <p>Page: {book?.page}</p>
            <p className="set-link">Set: 
                <Link to={`/sets/${book?.book_set_id}`}> {set?.name}</Link>
            </p>
            <p>Published date: {set?.year}</p>
            <p>Number of books in collection: {book?.units}</p>
            <Link to={`/books/${id}/edit`}>
                <button className="mini-btn">Edit Book</button>
            </Link>
            <button className="mini-btn" onClick={handleDelete}>Delete Book</button>
        </div>
    </div>
  )
}

export default BookPage