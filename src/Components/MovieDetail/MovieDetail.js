import React from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return (
      <div>
        <h2>Movie not found</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-detail" style={{marginLeft:'24%'}}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/"><button style={{color:'black' ,marginTop:'250px'}}>Go back to Home</button></Link>
    </div>
  );
}

export default MovieDetail;