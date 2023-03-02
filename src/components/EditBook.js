import React, { useState, useEffect } from 'react';
import  { useParams, useNavigate } from 'react-router-dom';

function EditBook({ books, setBooks, sets, setSets }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const book = books.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(book.book_set_id))
    const [ formData, setFormData ] = useState({
        name: "",
        author: "",
        review: "",
        comment: "",
        img_url: ""
    });

    useEffect(() => {
        setFormData(book);
        }, [book])

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:9292/books/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => updateBook(data))
            .then(() => navigate(`/books/${id}`));
        }

    const updateBook = (data) => {
        setBooks(books.map(mini => mini.id===data.id ? data : mini));
        const updatedSet = {...set, books: [...(set.books.map(mini => mini.id===data.id ? data : mini))]}
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s))
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

   
  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>Edit {book.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Book Title: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} required="required" autoFocus={true} /><br />
            </label>

            <label htmlFor="author">Author: 
                <input type="textarea" id="author" value={formData.author} onChange={handleChange} required="required" /><br />
            </label>
            
            <label htmlFor="review">Reviews: 
                <input type="number" id="review" value={formData.review} onChange={handleChange} required="required" min="1" max="10" /><br />
            </label>

            <label htmlFor="comment ">Comment: 
                <input type="textarea" id="comment" value={formData.comment} onChange={handleChange} required="required"/><br />
            </label>
            
            <label htmlFor="img_url">Image URL: 
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default EditBook;