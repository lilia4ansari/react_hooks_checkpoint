import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@material-ui/lab/Rating';
import CardActions from '@mui/material/CardActions';

 const  Description = (props) => {
 const [movie, setMovie]=useState(null);
 useEffect(() => {setMovie(props.movies.filter(el => el.id === props.match.params.id)[0])
})
  return (
    <div>
    {movie && (<Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={movie.rating} readOnly />   
      </CardActions>
    </Card>)}
    </div>
      
    );
};
export default Description;