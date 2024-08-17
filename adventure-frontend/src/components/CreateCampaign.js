import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../api';

function CreateCampaign() {
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/dsp/campaigns/', {
      name: name,
      budget: budget,
      start_date: startDate,
      end_date: endDate,
    })
    .then(response => {
      alert('Campaign created successfully!');
    })
    .catch(error => {
      console.error('Error creating campaign:', error);
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create Campaign
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Create Campaign
        </Button>
      </form>
    </Container>
  );
}

export default CreateCampaign;
