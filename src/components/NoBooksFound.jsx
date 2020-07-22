import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const NoBooksFound = () => (
  <Grid container justify="center" spacing={5}>
    <Grid item>
      <Typography variant="h4">No books found</Typography>
    </Grid>
  </Grid>
);

export default NoBooksFound;
