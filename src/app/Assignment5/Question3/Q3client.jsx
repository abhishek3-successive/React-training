'use client';

import { useState } from 'react';
import {
  Button,
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { fetchUsers } from '../Api-Data/externalCalls';  

const UsersList=({ users: initialUsers, hasError: initialHasError })=> {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(initialHasError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setError(false);

    const { users, hasError } = await fetchUsers();

    if (hasError) {
      setError(true);
    } else {
      setUsers(users);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <CircularProgress />
        <Typography mt={2}>Loading users...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={4} textAlign="center">
        <Typography color="error">Failed to load users. Please try again.</Typography>
        <Button onClick={retryFetch} variant="contained" color="primary" sx={{ mt: 2 }}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} divider>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

export default UsersList;