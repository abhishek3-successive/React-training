'use client';

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {styles} from './Q10.css'; // import the CSS file

export default function MUIForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Phone must be 10 digits';
    
  if (form.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  } else if (!/(?=.*[0-9])/.test(form.password)) {
    newErrors.password = 'Password must contain at least one number';
  } else if (!/(?=.*[!@#$%^&*])/.test(form.password)) {
    newErrors.password = 'Password must contain at least one special character (!@#$%^&*)';
  }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Handle form submission here
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="form-container " sx={styles.formContainer}>
      <TextField
        className="form-field"
        name="firstName"
        label="First Name"
        value={form.firstName}
        onChange={handleChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
        required
        sx={styles.formField}
      />
      <TextField
        className="form-field"
        name="lastName"
        label="Last Name"
        value={form.lastName}
        onChange={handleChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
        required
      />
      <TextField
        className="form-field"
        name="phone"
        label="Phone Number"
        value={form.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        type="tel"
        required
      />
      <TextField
        className="form-field"
        name="password"
        label="Password"
        value={form.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        type="password"
        required
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
