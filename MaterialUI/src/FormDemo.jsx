import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BoxSx() {
  return (
      <Box
        sx={{
          width: 500,
          height: 500,
          borderRadius: 15,
          p:2,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}>
            <h1>Name</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
  );
}
