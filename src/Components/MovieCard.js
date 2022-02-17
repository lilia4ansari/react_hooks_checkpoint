import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

 function  MovieCard({movie}) {
 
  return (
<div>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250px"
        image={movie.image}
        alt="green iguana"
      />
     
    </Card>
</div>
      
    );
};
export default MovieCard;

