import React from 'react';
import  'react-router-dom';


function SetPage() {

  return (
    <div className="set-page">
        <h2>{ set?.name }</h2>
        <h3>Published Date: { set?.year }</h3>
        <Link to={`/sets/${id}/books/new`}>
            <button className="form-link" >Add book</button>
        </Link>
        <Link to={`/sets/${id}/edit`}>
            <button className="form-link" >Edit Set</button>
        </Link>
        <button className="form-link" onClick={handleDelete}>Delete Set</button><br /><br />
        <div className="card-grid">{bookCards}</div>
    </div>
  )
}

export default SetPage;