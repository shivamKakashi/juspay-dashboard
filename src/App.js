import React, { useState } from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/dashboard/Dashboard';
import RightBar from './components/rightBar/RightBar'; 
import TopBar from './components/topBarComponent/TopBar';
import { Chart, ArcElement } from 'chart.js';
import './App.css';
import OrderList from './components/orderList/OrderList';

const drawerWidth = 240; // Set a fixed width for the sidebar
Chart.register(ArcElement);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isRightBarVisible, setIsRightBarVisible] = useState(true);

  const handleRightBarClick = (item) => {
    if (item === "Order List") {
      setIsRightBarVisible(false);
    } else if (item === "eCommerce") {
      setIsRightBarVisible(true);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      background: {
        default: "#f4f6f8",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#90caf9" },
      background: {
        default: "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar
          sx={{ width: drawerWidth, flexShrink: 0 }}
          darkMode={darkMode}
          handleRightBarClick={handleRightBarClick}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto', // Ensure the main content is scrollable
          }}
          className={darkMode ? "dark-scrollbar" : "light-scrollbar"} // Dynamic class for custom scrollbar
        >
          <div>
            <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <Container maxWidth="xl" sx={{ flexGrow: 1, width: '100%' }}>
            {isRightBarVisible ? <Dashboard darkMode={darkMode} /> : <OrderList />}
          </Container>
        </Box>
        {isRightBarVisible && (
          <Box
            sx={{
              width: 300,
              position: 'relative',
              right: 0,
              top: 0,
              bottom: 0,
              overflowY: 'auto',
              backgroundColor: darkMode ? '#333' : '#f9f9f9',
              borderLeft: '1px solid #ccc',
              padding: 2,
            }}
          >
            <RightBar />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
