import React, { useState } from 'react';
import { TextField } from '@mui/material';

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    name: "",
    description: "",
    image: "",
    rating: 0,
    date: 0,
    id: Math.random()
})
const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
}

  return  ( 
  <div style={{ display: "flex", backgroundColor: "white", gap: "20px", marginBottom: "20px" }}>
    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
      <TextField style={{ width: '25ch' }} label="Movie Title" variant="outlined" name="name" onChange={handleChange} />
      <TextField style={{ width: '25ch' }} label="Movie Img Link" variant="outlined" name="imgage" onChange={handleChange} />
      <TextField style={{ width: '25ch' }} label="Movie Description" variant="outlined" name="description" onChange={handleChange} />
      <TextField style={{ width: '25ch' }} label="Movie Year" variant="outlined" name="date" onChange={handleChange} />
      <TextField style={{ width: '25ch' }} label="Movie Rate" variant="outlined" name="rating" onChange={handleChange} />
    </div>

       <button style={{ width: "50px", height: "30px" }} onClick={() => {
           addMovie(newMovie)
         }}>Add</button>

  </div>
  )
};

export default AddMovie;
