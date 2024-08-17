import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import api from '../api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/accounts/users/')
      .then(response => {
        console.log('API response:', response.data);  // Log the response to inspect the data structure
        if (response && response.data && Array.isArray(response.data.results)) {
            console.log('users------------>', response.data.results);
            setUsers(response.data.results);  // Extract the `results` array
        } else {
            setUsers([]);  // If response is not as expected, set to an empty array
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setUsers([]);
      });
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Users
      </Typography>
      <Grid container spacing={3}>
        {users.length > 0 ? (
          users.map(user => (
            <Grid item xs={12} sm={6} key={user.id}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6" component="h3">
                  {user.username}
                </Typography>
                <Typography variant="body1">
                  Email: {user.email}
                </Typography>
                <Typography variant="body1">
                  Role: {user.role}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
            No users found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Users;
