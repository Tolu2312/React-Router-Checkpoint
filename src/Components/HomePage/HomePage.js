// HomePage.js
import React from 'react';
// import MovieCard from '../MovieCard/MovieCard';

function HomePage({ movies }) {
  return (
    <div className="home-page">
      {/* <h1>Welcome to the Movie App</h1> */}
      <div className="movie-list">
        {/* {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))} */}
      </div>
    </div>
  );
}

export default HomePage;