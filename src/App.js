import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from '../src/search.svg'
import MovieCard from './MovieCard';

//2f1c9ad7

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2f1c9ad7'

const App = () => {
  const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }

  useEffect(() => {
searchMovies('2023');
  }, []);

  return (
    <div className="app">
        <h1>ReactFlix</h1>

        <div className='search'>
          <input
          placeholder='Search For Movies...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {
          movies?.length > 0 
          ?(
            <div className='container'>
           {movies.map((movie) => (
             <MovieCard movie={movie}/>
           ))}
           </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
        }
    </div>
  );
}

export default App;
