import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from   'react-router-dom';

function EditSet({ sets, setSets }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const set = sets.find(set => set.id===parseInt(id))
    const [ formData, setFormData ] = useState({
        name: "",
    });

    useEffect(() => {
        setFormData(set);
        }, [set])

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:9292/book_sets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => updateSets(data))
            .then(() => navigate(`/sets/${id}`));
        }

    const updateSets = (data) => {
        const updatedSet = {...data, books: [...data.books]};
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s));
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }


  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>Edit {set.name}</h2>
        <div className="form-text">
            <label htmlFor="title">Book Genres: 
                <input type="textarea" id="name"  value={formData.name} onChange={handleChange}autoFocus={true}/><br />
            </label>    
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default EditSet;