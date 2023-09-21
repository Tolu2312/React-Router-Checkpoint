// MovieCard.js
import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="moviecard">
      <Link to={`/movie/${movie.title}`} style={{color:'#fff'}}>
        <img src={movie.posterURL} alt={movie.title} style={{paddingTop: '15px'}}/>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p style={{paddingBottom:'15px'}}>Rating: {movie.rating}</p>
      </Link>
    </div>
  );
}

export default MovieCard;