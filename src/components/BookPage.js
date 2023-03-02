import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function BookPage({ books, setBooks, sets, setSets }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = books.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(book?.book_set_id))

    const handleDelete = () => {
        fetch(`http://localhost:9292/books/${id}`, 
            { method: "DELETE" })
        .then(() => removeBook(id))
        .then(() => navigate(`/sets/${book.book_set_id}`));
    }

    const removeBook = id => {
        setBooks(books.filter(mini => mini.id !==id));
        const updatedSet = {...set, books: [...(set.books.filter(mini => mini.id !==id))]};
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s));
    }
   
  return (
    <div className="mini-container">
        <div className="mini-image">
             <img src={book?.img_url} alt=""/>
        </div>
        <h2>{ book?.name }</h2>
        <div className="mini-details">
            <p>genres: {book?.genre}</p>
            <p>Page: {book?.page_size}</p>
            <p className="set-link">Set: 
                <Link to={`/sets/${book?.book_set_id}`}> {set?.name}</Link>
            </p>
            <p>Author: {book?.author}</p>
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