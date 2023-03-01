import React  from 'react';

function NewSet() {
    
  return (
    <form className="set-form">
        <h2>New Set Submission</h2>
        <div className="form-text">
            <label htmlFor="name">Author Name: 
                <input type="textarea" id="name"/><br />
            </label>
            <label htmlFor="title">Book Title: 
                <input type="textarea" id="title"/><br />
            </label>
            <label htmlFor="year">Year: 
                <input type="integer" id="year"/><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewSet;