import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const MovieItem = ({ movie }) => {

    return (
        <div className="cards" key={movie.id}>
            <h2 className="title">{movie.id}. {movie.Series_Title}</h2>

            <h2 className="genres">{movie.Genre}</h2>
            <h2 className="rating">IMDB Rating: {movie.IMDB_Rating} ⭐</h2>
            <h2 className="released_year">Year: {movie.Released_Year}</h2>
            <h2 className="overview">{movie.Overview}</h2>
            <h2 className="runtime">{movie.Runtime}</h2>
            <div style={{
                backgroundImage: `url('${movie.Poster_Link}')`,
                width: '100%',
                height: "400px",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}></div>

        </div>)
}

export default MovieItem