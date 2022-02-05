import React from 'react'
import MovieCard from './MovieCard'
import SearchTexte from './Navbar/SearchTexte';

const MovieList = ({movies, SearchTexte}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            }}
        >
            <button>Add movie</button>
           <h1>Movies List</h1> 
            {movies.filter((el)=>el.name.toUpperCase().includes(SearchTexte.toUpperCase()))
            .map((el) => (
            <MovieCard movie={el} />
            ))}{" "}
        </div>
    )
}

export default MovieList; 