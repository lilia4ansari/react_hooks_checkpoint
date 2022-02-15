import React from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

const MovieList = ({movies, searchTexte, addMovie}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop:"100px"
            }}>
            
            {movies
            .map((el,key) => (
            <MovieCard movie={el}  key={key}/>
            ))}
            <AddMovie addMovie={addMovie}/>
        </div>
    )
}

export default MovieList; 