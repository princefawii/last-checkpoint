import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps';
import { Container, Typography } from '@mui/material';

function LandingPage() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Location
      </Typography>

      <div style={{ height: '400px', width: '100%' }}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            center={{ lat: 0, lng: 0 }} // Set the initial center of the map
            zoom={8} // Set the initial zoom level
          />
        </LoadScript>
      </div>
    </Container>
  );
}

export default LandingPage;