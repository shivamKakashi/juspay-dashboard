import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Box, Typography, LinearProgress } from '@mui/material';

const geoUrl = 'https://shivamKakashi.github.io/juspay-dashboard/world-countries.json';

const locations = [
  { name: 'New York', coordinates: [-74.006, 40.7128], value: 72 },
  { name: 'San Francisco', coordinates: [-122.4194, 37.7749], value: 39 },
  { name: 'Sydney', coordinates: [151.2093, -33.8688], value: 25 },
  { name: 'Singapore', coordinates: [103.8198, 1.3521], value: 61 },
];

const WorldMap = ({darkMode}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , width : '100%'}}>
      <ComposableMap projectionConfig={{ scale: 160 }} style={{ width:'100%' , height: 'auto'}} >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill={darkMode ? "rgba(168, 197, 218, 1)" : "#EAEAEC"} stroke="#D6D6DA" />
            ))
          }
        </Geographies>
        {locations.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={15}  fill={darkMode ? "rgba(198, 199, 248, 1)" : "rgba(28, 28, 28, 1)"} strokeWidth={2} stroke={darkMode ? "rgb(247 1 1 / 80%)" : "rgba(0, 0, 0, 0.8)"}/>
          </Marker>
        ))}
      </ComposableMap>

      {/* Revenue List */}
      <Box sx={{ width: '100%', mt: 1 }}>
        {locations.map(({ name, value }) => (
          <Box
            key={name}
            sx={{
              mb: 0.5,
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '0.6rem' }}>{name}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 0.5,
                width: '100%',
                mx: 'auto',
              }}
            >
              <LinearProgress
                variant="determinate"
                value={(value / 72) * 100}
                sx={{
                  flexGrow: 1,
                  height: 3,
                  borderRadius: 0.5,
                  backgroundColor: '#f0f0f0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#007BFF',
                  },
                }}
              />
              <Typography variant="body2" sx={{ ml: 0.5,  fontSize: '0.6rem' }}>{`${value}K`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WorldMap;
