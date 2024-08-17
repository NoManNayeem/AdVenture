import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import api from '../api';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    api.get('/dsp/campaigns/')
      .then(response => {
        console.log('API response:', response.data);  // Log the response to inspect the data structure
        if (response && response.data && Array.isArray(response.data.results)) {
          setCampaigns(response.data.results);
        } else {
          setCampaigns([]);
        }
      })
      .catch(error => {
        console.error('Error fetching campaigns:', error);
        setCampaigns([]);
      });
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Campaigns
      </Typography>
      <Grid container spacing={3}>
        {campaigns.length > 0 ? (
          campaigns.map(campaign => (
            <Grid item xs={12} sm={6} key={campaign.id}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6" component="h3">
                  {campaign.name}
                </Typography>
                <Typography variant="body1">
                  Budget: {campaign.budget}
                </Typography>
                <Typography variant="body1">
                  Start Date: {campaign.start_date}
                </Typography>
                <Typography variant="body1">
                  End Date: {campaign.end_date}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
            No campaigns found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Campaigns;
