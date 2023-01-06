import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { NavLink } from 'react-router-dom'
import MovieItem from './MovieItem'
import { getMoviesByPage } from '../../api';

function Home() {
  const [page, setPage] = useState(1)
  //const link = `http://localhost:3001/movies?_page=${page}`
  const [movies, setMovies] = useState([])

  const getMovies = async () => {

    //const response = await fetch(link)
    //const data = await response.json()
    //setMovies(data)
    getMoviesByPage(page).then(response => {
      setMovies(response.data)
    }).catch(error => {
      alert(error)
    })
  }

  useEffect(() => {
    // getMovies().then(response => {
    //     setMovies(response.data)
    // }).catch(error =>{
    //     console.log(error)
    // })
    getMovies()
  }, [page])

  return (
    <div className="movie-list">

      <div>
        <button onClick={() => setPage(1)}> ⇦ First page</button>

        <button onClick={() => setPage(prev => prev - 1)}> ⇦ Previous Page</button>
        <button onClick={() => setPage(prev => prev + 1)}>Next Page ⇨</button>

      </div>
      <div className="movies-container">
        {movies.map((movie) =>
          <MovieItem key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  )
}

export default Home
