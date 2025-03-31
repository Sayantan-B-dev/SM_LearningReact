import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
function RatingStars() {
  const [score,setScore]=useState(3)
  return (
    <>
      <Button variant="contained">Contained</Button>
      <p>{score}</p>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
            if (newValue !== null) {
                setScore(newValue);
              }
        }}
      />
    </>
  )
}

export default RatingStars
