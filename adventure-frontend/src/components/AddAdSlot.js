import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../api';

function AddAdSlot() {
  const [name, setName] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [format, setFormat] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/ssp/adslots/', { name, width, height, format, publisher })
      .then(response => alert('Ad Slot added successfully!'))
      .catch(error => console.error('Error adding ad slot:', error));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Add New Ad Slot
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Width"
          value={width}
          onChange={e => setWidth(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Height"
          value={height}
          onChange={e => setHeight(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Format"
          value={format}
          onChange={e => setFormat(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Publisher ID"
          value={publisher}
          onChange={e => setPublisher(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Ad Slot
        </Button>
      </form>
    </Container>
  );
}

export default AddAdSlot;
