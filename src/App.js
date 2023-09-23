// App.js
import React, { useState } from 'react'
import './App.css'
import MovieList from './Components/MovieList/MovieList'
import Filter from './Components/Filter/Filter'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

//import { Routes, Route, Router } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import MovieDetail from './Components/MovieDetail/MovieDetail'
import MovieCard from './Components/MovieCard/MovieCard';

function App() {
  const [movies, setMovies] = useState([
    {
        title:'Little mermaid',
        posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6H3zZX7sW4b5TzTp7mMwyCeZoWFlW3TQRtQ&usqp=CAU',
        description:'Ariel is a beautiful and spirited young mermaid with a thirst for adventure',
        rating:'4.5',
        trailerLink: 'https://www.youtube.com/embed/kpGo2_d3oYE?si=Oaw1aBeOOTXK8mZ5',
    },
    {
        title:'Meg2: the trench',
        posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShurxNaZ0F_3vEh7w_CJ9etJs_EqGiiAClHA&usqp=CAU',
        description:'Their voyage spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival',
        rating:'5.0',
        trailerLink:'https://www.youtube.com/embed/JujTYiDlu7g?si=bvp_rob7_WwjHGp0',
    },
    {
        title:'The mother',
        posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6pQhypSeDP68-jxbGhl_PDWGFvR6dzgScA&usqp=CAU',
        description:'It is about a former US army operative (Lopez) who partners with an FBI agent to rescue her teenage daughter after she is kidnapped by criminals',
        rating:'4.5',
        trailerLink:'https://www.youtube.com/embed/Awmni5mbyWE?si=5fxrUO4EQw7q0PTW',
    },
    {
        title:'Heart of stone',
        posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuk3ZqNxBE6vHlq7-iC6LF5T946AUtC6K8g&usqp=CAU',
        description:'Its plot follows an international intelligence operative who must embark on a dangerous mission to protect a mysterious artificial intelligence system',
        rating:'4.8',
        trailerLink:'https://www.youtube.com/embed/VbnS5biBmsw?si=gDTPfMkI9OtxDgMG',
    },
    {
        title:'Extraction 2',
        posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kGPsLnY2EY9-VeThe_diXQlAHjHPrX6sTw&usqp=CAU',
        description:'Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangsters imprisoned family ',
        rating:'4.9',
        trailerLink:'https://www.youtube.com/embed/mi4pEsYeljk?si=KtoYAJe9eXKzSbES',
    },
]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  // Function to add a new movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Function to filter movies by title
  const filterByTitle = (e) => {
    setFilterTitle(e.target.value);
  };

  // Function to filter movies by rating
  const filterByRating = (e) => {
    setFilterRating(e.target.value);
  };

  // Filtered movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
  );
  

  return (
    
    <div className="App">
      <h1 style={{textAlign:'center'}}>Movie App</h1>    
      <Router >
        <Routes>
          <Route path="/" element={<HomePage movies={filteredMovies} />}></Route>
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />}></Route>
        </Routes>
      </Router>
      

      <Filter onTitleChange={filterByTitle} onRatingChange={filterByRating} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: `Through my window: Across the Sea`,
            description: `After a year of long-distance, Raquel and Ares reunite on a steamy beach trip`,
            posterURL: 'data:image/jpeg;base64,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',
            rating: 4.7,
            trailerLink: '',
          })
        }
      >
        Add New Movie
      </button>
    </div>
   
  );
}




export default App;