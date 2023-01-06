import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
        <NavLink to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" className="logo-img" /></NavLink>
        <NavLink className = "popular" to="welcome">Welcome</NavLink>
        <NavLink className = "popular" to="movies/popular">Popular</NavLink>
        <NavLink className = "topRated" to="movies/top_rated">Top Rated</NavLink>
        <NavLink className = "upcoming" to="movies/upcoming">Upcoming</NavLink>
        <NavLink className = "upcoming" to="contact">Contact</NavLink>

    </nav>
  )
}


export default Nav
