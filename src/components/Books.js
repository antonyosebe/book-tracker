import React from "react";
import BookCard from "./BookCard";

function Books({ books}) {
    const bookCards = () => books.map((book, index) => <BookCard key={index} book={book}/>)

    return (
        <div>
            <div className="mini-header">
                <h3 className="counter">You have {books.length} book in your collection.</h3>
            </div>
            <div className="card-grid">{bookCards()}</div>
        </div>
    )
}

export default Books;