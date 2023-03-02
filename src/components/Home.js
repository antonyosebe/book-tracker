import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

function Home() {
    const [ newBooks, setNewBooks ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:9292/books/new')
        .then(res => res.json())
        .then(data => setNewBooks(data))
      }, [])

    const bookCards = newBooks.map((book, index)  => <BookCard key={ index } book={ book }/>)

    return (
        <div className="set-page">
            <div className="quote"><b>
                <p><i>"thinking about tracking your reading plan"</i></p></b>
            </div>
            <h3>Latest books in your collection:</h3>
            <div className="card-grid">{ bookCards }</div>
        </div>
    )
}

export default Home;