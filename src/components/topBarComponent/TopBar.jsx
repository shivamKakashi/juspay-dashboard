import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Tooltip, Typography } from "@mui/material";
import { Search, WbSunny, Brightness3, Notifications, AccountCircle } from "@mui/icons-material"; // Keep the necessary imports
import { Box } from "@mui/system";

const TopBar = ({ darkMode, toggleDarkMode }) => {
  const activeBackgroundColor = darkMode
  ? "rgb(18 18 18)"
  : "transparent"; // Background color when active

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: activeBackgroundColor, // Background color based on dark mode
        color: darkMode ? "#f5f5f5" : "rgba(28,28,28,1)", // Text color based on dark mode
        boxShadow: "none",
        borderBottom: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(28,28,28,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" , backgroundColor: activeBackgroundColor,}}>
        {/* Left side (breadcrumb-like navigation) */}
        <Box display="flex" alignItems="center">
          {/* Home Icon */}
          <IconButton edge="start" sx={{ p: 2 }}>
          {darkMode ? <img src="https://shivamKakashi.github.io/juspay-dashboard/icons/Sidebar.png" alt="Home" style={{ width: '24px', height: '24px' }} /> : <img src="https://shivamKakashi.github.io/juspay-dashboard/icons/IconSet (1).png" alt="Home" style={{ width: '24px', height: '24px' }} />
          }
            
          </IconButton>

          {/* Divider ("/") */}

          {/* Dashboard Icon */}
          <IconButton edge="start" sx={{ p: 0 }}>
          {
            darkMode ? <img src="https://shivamKakashi.github.io/juspay-dashboard/icons/Star.png" alt="Dashboard" style={{ width: '24px', height: '24px' }} /> : <img src="https://shivamKakashi.github.io/juspay-dashboard/icons/Button.png" alt="Dashboard" style={{ width: '24px', height: '24px' }} />
          }
          </IconButton>
          {/* Second Text */}
          <Typography sx={{ mx: 1, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(28,28,28,0.5)" }}>Dashboards</Typography>
          <Typography sx={{ color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(28,28,28,0.5)" }}>/</Typography>
          <Typography sx={{ mx: 1, color: darkMode ? "#f5f5f5" : "rgba(28,28,28,1)" }}>Default</Typography>
        </Box>

        {/* Right side (icons and theme toggle) */}
        <Box display="flex" alignItems="center">
          {/* Search Box */}
          <Box display="flex" alignItems="center" sx={{
            border: `1px solid ${darkMode ? "rgba(255,255,255,0.3)" : "rgba(28,28,28,0.2)"}`,
            paddingLeft: '10px',
            borderRadius: '10px',
            backgroundColor: darkMode ? "rgba(28, 28, 28, 0.6)" : "#f5f5f5",
          }}>
            <IconButton edge="start">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search"
              sx={{ ml: 1, flex: 1, fontSize: "0.875rem", color: darkMode ? "#f5f5f5" : "inherit" }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>

          {/* Toggle theme button */}
          <Tooltip title="Toggle Light/Dark mode">
            <IconButton onClick={toggleDarkMode}>
              {darkMode ? <Brightness3 /> : <WbSunny />}
            </IconButton>
          </Tooltip>

          {/* Notifications */}
          <IconButton>
            <Notifications sx={{ color: darkMode ? "#f5f5f5" : "inherit" }} />
          </IconButton>

          {/* Account/Profile */}
          <IconButton edge="start" sx={{ p: 2 }}>
          {darkMode ? <img src="https://shivamKakashi.github.io/juspay-dashboard/icons/Sidebar.png" alt="Home" style={{ width: '24px', height: '24px' }} /> : <img src="https://shivamKakashi.github.io/juspay-dashboard/icons/IconSet (1).png" alt="Home" style={{ width: '24px', height: '24px' }} />
        }
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
