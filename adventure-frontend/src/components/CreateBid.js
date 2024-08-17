import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, MenuItem, Typography } from '@mui/material';
import api from '../api';

function CreateBid() {
  const [campaigns, setCampaigns] = useState([]);
  const [adSlots, setAdSlots] = useState([]);
  const [campaign, setCampaign] = useState('');
  const [adSlot, setAdSlot] = useState('');
  const [bidAmount, setBidAmount] = useState('');

  useEffect(() => {
    api.get('/dsp/campaigns/')
      .then(response => setCampaigns(response.data.results))
      .catch(error => console.error('Error fetching campaigns:', error));

    api.get('/ssp/adslots/')
      .then(response => setAdSlots(response.data.results))
      .catch(error => console.error('Error fetching ad slots:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/rtb/bids/', {
      campaign: campaign,
      ad_slot: adSlot,
      bid_amount: bidAmount,
    })
    .then(response => {
      alert('Bid created successfully!');
    })
    .catch(error => {
      console.error('Error creating bid:', error);
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create Bid
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Campaign"
          value={campaign}
          onChange={(e) => setCampaign(e.target.value)}
          fullWidth
          required
          margin="normal"
        >
          {campaigns.map((camp) => (
            <MenuItem key={camp.id} value={camp.id}>
              {camp.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Ad Slot"
          value={adSlot}
          onChange={(e) => setAdSlot(e.target.value)}
          fullWidth
          required
          margin="normal"
        >
          {adSlots.map((slot) => (
            <MenuItem key={slot.id} value={slot.id}>
              {slot.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Bid Amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Create Bid
        </Button>
      </form>
    </Container>
  );
}

export default CreateBid;
