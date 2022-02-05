import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@material-ui/lab/Rating';

/*const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
*/
export default function MovieCard({movie}) {
   /* const classes = useStyles();*/
  return (

       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.image}
        alt="green iguana"
      />
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
    </Card>
    );
};


