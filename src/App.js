import React, { useState } from 'react';
import'./App.css';
import MovieList from './Components/MovieList';
import { moviesData } from "./Constant/Data";
import SearchAppBar from './Components/Navbar/Navbar';
import AddMovie from './Components/AddMovie';

function App() {
 
  const [movies, setMovies] = useState(moviesData);
  const [searchTexte, setSearchTexte] = useState("")

  const addNewMovie = (newMovie) => {
    setMovies(movies.concat(newMovie))
  }
console.log(movies)
    return (
    <div className="App">
        <SearchAppBar setSearchTexte={setSearchTexte}/>
        <MovieList 
         movies={movies.filter((el)=>el.name.toUpperCase().includes(searchTexte.toUpperCase()))} 
         searchTexte={searchTexte}
         
         addMovie={addNewMovie}
        /> 
    </div>
  )
}

export default App;



