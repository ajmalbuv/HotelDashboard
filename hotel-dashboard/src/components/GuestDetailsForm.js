import React, { useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

function GuestDetailsForm({ onSubmit }) {
    const [guestDetails, setGuestDetails] = useState({
        name: '',
        contact: '',
        roomNumber: '',
    });

    const handleChange = (event) => {
        setGuestDetails({ ...guestDetails, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(guestDetails); // Pass captured data to parent component
        setGuestDetails({ name: '', contact: '', roomNumber: '' }); // Clear form after submission
    };

    // Assuming you have an array of room numbers
    const roomNumbers = [101, 102, 103, 201, 202, 203, 301, 302, 303];

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Guest Name"
                name="name"
                value={guestDetails.name}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Contact Information"
                name="contact"
                value={guestDetails.contact}
                onChange={handleChange}
                required
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel id="room-number-label">Room Number</InputLabel>
                <Select
                    labelId="room-number-label"
                    name="roomNumber"
                    value={guestDetails.roomNumber}
                    onChange={handleChange}
                >
                    {roomNumbers.map((roomNumber) => (
                        <MenuItem key={roomNumber} value={roomNumber}>
                            {roomNumber}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default GuestDetailsForm;
