import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import Movie from 'C:/Users/jclen/Desktop/EiST4/centrale-ei-web/frontend/src/components/Movie/Movie';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
  },
};

const DEFAULT_VALUES = {
  name: '',
};


function Home() {
  const [movieName, setMovieName] = useState(DEFAULT_VALUES);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log('ça a marché');
        setMovies(res.data.results.slice(0, 10));
      })
      .catch((err) => console.error('on a une erreur' + err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Recherche de films</p>
        <input
          value={movieName.name}
          onChange={(event) =>
            setMovieName({ ...movieName, name: event.target.value })
          }
          type="text"
          id="nom"
          name="nom"
          placeholder="Entrez le nom d'un film"
        ></input>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Dernier film sélectionné : {movieName.name} </p>
      </header>
      <ol>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ol>
      <div>
        <Movie ours={movies} />
      </div>
    </div>
  );
}

export default Home;
