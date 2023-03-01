import React from 'react';
import  'react-router-dom';

function EditBook() {
   
  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>Edit {book.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true} /><br />
            </label>
            <label htmlFor="rarity">Rarity: 
                <select className="new-select" type="textarea" id="rarity" value={formData?.rarity} onChange={handleChange}>
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Unique">Unique</option>
                </select><br />
            </label>
            <label htmlFor="size">Page: 
                <select className="new-select" type="textarea" id="size" value={formData.size} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select><br />
            </label>
            <label htmlFor="units">Number of units: 
                <input type="number" id="units" min="1" value={formData.units} onChange={handleChange} /><br />
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