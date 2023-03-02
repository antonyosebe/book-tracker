import React from 'react';
import { Link, useParams, useNavigate } from  'react-router-dom';
import BookCard from './BookCard';

function SetPage({ sets, setSets, books, setBooks }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const set = sets.find(set => set.id===parseInt(id))
    // const [ set, setSet ] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:9292/book_sets/${id}`)
    //     .then(res => res.json())
    //     .then(data => setSet(data))
    // }, [])
    
    const bookCards = set?.books?.map((book, index)  => <BookCard key={ index } book={ book }/>)

    const handleDelete = () => {
        fetch(`http://localhost:9292/book_sets/${id}`, 
            { method: "DELETE" })
        .then(() => removeSet(id))
        .then(() => navigate("/sets"));
    }

    const removeSet = id => {
        setSets(sets.filter(s => s.id !==id))
        setBooks(books.filter(mini => mini.book_set_id !==id))
    }

  return (
    <div className="set-page">
        <h2>{ set?.name }</h2>
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