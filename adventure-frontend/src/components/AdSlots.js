import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import api from '../api';

function AdSlots() {
  const [adSlots, setAdSlots] = useState([]);

  useEffect(() => {
    api.get('/ssp/adslots/')
      .then(response => {
        console.log('API response:', response.data);  // Log the response to inspect the data structure
        if (response && response.data && Array.isArray(response.data.results)) {
          console.log('adSlots------------>', response.data.results);
          setAdSlots(response.data.results);  // Extract the `results` array
        } else {
          setAdSlots([]);  // If response is not as expected, set to an empty array
        }
      })
      .catch(error => {
        console.error('Error fetching ad slots:', error);
        setAdSlots([]);  // In case of error, set to an empty array
      });
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Ad Slots
      </Typography>
      <Grid container spacing={3}>
        {adSlots.length > 0 ? (
          adSlots.map(adSlot => (
            <Grid item xs={12} sm={6} key={adSlot.id}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6" component="h3">
                  {adSlot.name}
                </Typography>
                <Typography variant="body1">
                  Size: {adSlot.width}x{adSlot.height}
                </Typography>
                <Typography variant="body1">
                  Format: {adSlot.format}
                </Typography>
                <Typography variant="body1">
                  Publisher: {adSlot.publisher}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
            No ad slots found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default AdSlots;
