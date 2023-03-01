import React  from 'react';

function Home() {
    return (
        <div className="set-page">
            <div className="quote"><b>
                <p><i>"thinking about tracking."</i></p></b>
            </div>
            <h3>Latest books in your collection:</h3>
            <div className="card-grid">{ bookCards }</div>
        </div>
    )
}

export default Home;