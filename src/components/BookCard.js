import React from 'react'
import { Link } from 'react-router-dom';

function BookCard({ miniature }) {
  return (
     <Link to={`/books/${book.id}`}>
        <div className="card">
            <div className="card-image">
                <img src={book.img_url} alt="Image not found."/>
            </div>
            <div className="card-name">{book.name}</div>
        </div>
    </Link>
  )
}

export default BookCard