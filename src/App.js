import './App.css';
import React, { useState, useEffect }from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Sets from './components/Sets';
import SetPage from './components/SetPage';
import NewSet from './components/NewSet';
import EditSet from './components/EditSet';
import Books from './components/Books';
import BookPage from './components/BookPage';
import NewBook from './components/NewBook';
import EditBook from './components/EditBook.js';

function App() {
  const [ sets, setSets ] = useState([]);
  const [ books, setBooks ] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/book_sets')
    .then(res => res.json())
    .then(data => setSets(data))
  }, [])

useEffect(() => {
    fetch('http://localhost:9292/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

    return (
    <div className = "App">
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sets" element={<Sets sets={ sets }/>}/>
          <Route exact path="/sets/:id" element={<SetPage sets={ sets } setSets={ setSets } books={ books } setBooks={ setBooks } />}/>
          <Route exact path="/newset" element={<NewSet sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/sets/:id/edit" element={<EditSet sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/books" element={<Books books={ books }/>}/>
          <Route exact path="/books/:id" element={<BookPage books={ books } setBooks={ setBooks } sets={ sets } setSets={ setSets }/>}/>
          <Route exact path="/sets/:bookSetId/books/new" element={<NewBook books={ books } setBooks={ setBooks } sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/books/:id/edit" element={<EditBook books={ books } setBooks={ setBooks } sets={ sets } setSets={ setSets } />}/>
        </Routes>
    </div>

)
}

export default App;
