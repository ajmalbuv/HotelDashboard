import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';

function RoomStatusCard({ roomNumber, isOccupied, guestName }) {
    const [guestDetails, setGuestDetails] = useState(null);

    // (For future implementation) Fetch guest details based on room number
    // useEffect(() => {
    //   // Fetch guest details from backend API (if available)
    //   // setGuestDetails(fetchedGuestData);
    // }, [roomNumber]);

    const occupancyStatus = isOccupied ? 'Occupied' : 'Available';

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{`Room ${roomNumber}`}</Typography>
                <Typography variant="body2" color={isOccupied ? 'error' : 'primary'}>
                    {occupancyStatus}
                </Typography>
                {guestDetails && ( // (Optional) Display guest details if fetched
                    <>
                        <Typography variant="body2">Guest Name: {guestDetails.name}</Typography>
                        <Typography variant="body2">Contact: {guestDetails.contact}</Typography>
                    </>
                )}
                <IconButton aria-label="Edit Guest Details" disabled={!isOccupied}>
                    {/* Edit icon for future implementation */}
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default RoomStatusCard;
