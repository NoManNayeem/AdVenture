import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to AdVenture
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Manage your advertising campaigns efficiently with our platform.
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/adslots">
            View Ad Slots
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/users">
            Manage Users
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
