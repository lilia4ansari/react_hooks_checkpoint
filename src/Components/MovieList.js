import React from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import {Link} from "react-router-dom";
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
                <div>
                   <MovieCard movie={el}  key={key}/>
                   <Link to={`/movie/${el.id}`}>See Details</Link>
                </div>
            ))}
            {/*<AddMovie addMovie={addMovie}/>*/}
        </div>
    )
}

export default MovieList; 