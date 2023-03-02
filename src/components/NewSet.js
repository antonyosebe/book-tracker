import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewSet({ sets, setSets }) {

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        name: "",
        author: "",
        year: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:9292/book_sets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => addSet(data))
            .then(() => navigate("/sets"));
        }

    const addSet = (data) => {
        setSets([...sets, data])
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    
  return (
    <form className="set-form"onSubmit={handleSubmit}>
        <h2>New Set Submission</h2>
        <div className="form-text">
        <label htmlFor="name">Book Genres: 
                <select className="new-select" type="textarea" id="name" value={formData.genres} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Advenrure">Adventure</option>
                    <option value="Classics">Classics</option>
                    <option value="Crime">Crime</option>
                    <option value="Fantacy">Fantacy</option>
                    <option value="Horror">Horror</option>
                    <option value="History">History</option>
                </select><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewSet;