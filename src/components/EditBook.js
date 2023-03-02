import React, { useState, useEffect } from 'react';
import  { useParams, useNavigate } from 'react-router-dom';

function EditBook({ books, setBooks, sets, setSets }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const book = books.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(book.book_set_id))
    const [ formData, setFormData ] = useState({
        name: "",
        genres: "",
        author: "",
        page_size: "",
        units: "",
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
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true} /><br />
            </label>
            <label htmlFor="genres">genres: 
                <select className="new-select" type="textarea" id="genres" value={formData?.genres} onChange={handleChange}>
                <option value="Advenrure">Adventure</option>
                    <option value="Classics">Classics</option>
                    <option value="Crime">Crime</option>
                    <option value="Fantacy">Fantacy</option>
                    <option value="Horror">Horror</option>
                    <option value="History">History</option>
                </select><br />
            </label>
            <label htmlFor="page_size">Page_size: 
                <select className="new-select" type="textarea" id="size" value={formData.size} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select><br />
            </label>
            <label htmlFor="units">Review: 
                <input type="number" id="review" min="1" value={formData.units} onChange={handleChange} /><br />
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