import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem } from '@mui/material';
import api from '../api';

function AddUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('publisher');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/accounts/users/', { username, email, password, role })
      .then(response => alert('User added successfully!'))
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
          select
          fullWidth
          required
          margin="normal"
        >
          <MenuItem value="publisher">Publisher</MenuItem>
          <MenuItem value="advertiser">Advertiser</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add User
        </Button>
      </form>
    </Container>
  );
}

export default AddUser;
