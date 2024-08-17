import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import api from '../api';

function RTB() {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    api.get('/rtb/bids/')
      .then(response => {
        console.log('API response:', response.data);  // Log the response to inspect the data structure
        if (response && response.data && Array.isArray(response.data.results)) {
          console.log('bids------------>', response.data.results);
          setBids(response.data.results);  // Extract the `results` array
        } else {
          setBids([]);  // If response is not as expected, set to an empty array
        }
      })
      .catch(error => {
        console.error('Error fetching bids:', error);
        setBids([]);
      });
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Real-Time Bids
      </Typography>
      <Grid container spacing={3}>
        {bids.length > 0 ? (
          bids.map(bid => (
            <Grid item xs={12} sm={6} key={bid.id}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6" component="h3">
                  {bid.campaign.name} - {bid.ad_slot.name}
                </Typography>
                <Typography variant="body1">
                  Bid Amount: {bid.bid_amount}
                </Typography>
                <Typography variant="body1">
                  Timestamp: {new Date(bid.timestamp).toLocaleString()}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
            No bids found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default RTB;
