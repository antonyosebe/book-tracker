import React, { useState, useEffect } from 'react';
import   'react-router-dom';

function EditSet( ) {
  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>Edit {set.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Author Name: 
                <input type="textarea" id="name" /><br />
            </label>
            <label htmlFor="name">Book Title: 
                <input type="textarea" id="title" /><br />
            </label>
            <label htmlFor="year">Year: 
                <input type="number" id="year"/><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default EditSet;