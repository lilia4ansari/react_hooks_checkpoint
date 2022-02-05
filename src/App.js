import React, { useState } from 'react';
import'./App.css';
import MovieList from './Components/MovieList';
import { moviesData } from "./Constant/Data";
import SearchAppBar from './Components/Navbar/Navbar';

function App() {
 
  const [movies, setMovies] = useState(moviesData);
  const [searchTexte, setSearchTexte] = useState("")
    return (
    <div className="App">
        <SearchAppBar setSearchTexte={setSearchTexte}/>
        <MovieList 
         movies={movies} 
        searchTexte={searchTexte}
        /> 
    
    </div>
  );
}

export default App;



