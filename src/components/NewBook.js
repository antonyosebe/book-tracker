import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewBook({ books, setBooks, sets, setSets }) {

    const navigate = useNavigate();
    const { bookSetId } = useParams();
    const set = sets.find(s => s.id===parseInt(bookSetId))
    const [ formData, setFormData ] = useState({
        name: "",
        genres: "",
        page_size: "",
        units: "",
        img_url: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:9292/book_sets/${bookSetId}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => addBook(data))
            .then(() => navigate(`/sets/${bookSetId}`));
            console.log(set.books)
        }

    const addBook = (data) => {
        setBooks([data, ...books])
        const updatedSet = {...set, books: [data, ...set.books]}
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
        <h2>New Book for {set.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Book Title: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} required="required" autoFocus={true} /><br />
            </label>
            <label htmlFor="genres">Genres: 
                <select className="new-select" type="textarea" id="genres" value={formData.genres} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Advenrure">Adventure</option>
                    <option value="Classics">Classics</option>
                    <option value="Crime">Crime</option>
                    <option value="Fantacy">Fantacy</option>
                    <option value="Horror">Horror</option>
                    <option value="History">History</option>
                </select><br />
            </label>
            <label htmlFor="author">Author: 
                <input type="textarea" id="author" value={formData.name} onChange={handleChange} required="required" autoFocus={true} /><br />
            </label>
            <label htmlFor="page_size">Page_size: 
                <select className="new-select" type="textarea" id="size" value={formData.size} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select><br />
            </label>
            <label htmlFor="units">Units: 
                <input type="number" id="units" value={formData.units} onChange={handleChange} required="required" min="1" max="5" /><br />
            </label>
            <label htmlFor="img_url">Image URL: 
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} required="required" /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewBook