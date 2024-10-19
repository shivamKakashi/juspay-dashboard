import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Collapse,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import {
  ArrowForwardIos,
  FiberManualRecordRounded,
} from "@mui/icons-material";

function Sidebar({ darkMode , handleRightBarClick }) {
  // State to track which item is open or active
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openCorporate, setOpenCorporate] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const [activeItem, setActiveItem] = useState("Default");

  // Handle click to toggle the open state for each section
  const handleItemClick = (item) => {
    setActiveItem(item);
    handleRightBarClick(item);
  };

  const toggleDashboards = () => setOpenDashboards(!openDashboards);
  const toggleUserProfile = () => setOpenUserProfile(!openUserProfile);
  const toggleAccount = () => setOpenAccount(!openAccount);
  const toggleCorporate = () => setOpenCorporate(!openCorporate);
  const toggleBlog = () => setOpenBlog(!openBlog);
  const toggleSocial = () => setOpenSocial(!openSocial);

  const iconFontSize = 18; // Consistent font size for icons
  const sidebarBackgroundColor = darkMode
    ? "rgba(34,34,34,1)"
    : "rgba(255,255,255,255)";
  const listItemFontSize = "0.875rem"; // Consistent font size for list text
  const sidebarTextColor = darkMode
    ? "rgba(255,255,255,1)"
    : "rgba(28,28,28,1)"; // Subtle text color
  const activeTextColor = darkMode
    ? "rgba(255, 255, 255, 0.4)"
    : "rgba(28,28,28, 0.4)"; // Text color when active
  const iconColor = darkMode ? "rgba(255,255,255,0.2)" : "rgba(28,28,28,0.2)"; // Subtle icon color
  const activeBackgroundColor = darkMode
    ? "rgba(255,255,255,0.1)"
    : "rgba(28,28,28,0.1)"; // Background color when active

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: 'transparent',
          color: sidebarTextColor,
          paddingTop: 2,
          paddingBottom: 2,
          borderRight: "1px solid rgba(28,28,28,0.1)", // Add subtle border on the right
        },
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Profile Section */}
        <List component="div" disablePadding>
          <ListItem
            sx={{ display: "flex", alignItems: "center", paddingLeft: 2 }}
          >
            <Avatar sx={{ width: 40, height: 40 }} src="/icons/ByeWind.png" />
            <Typography
              variant="body1"
              sx={{
                marginLeft: 1,
                fontSize: "1rem",
                color: sidebarTextColor,
                fontWeight: 500,
              }}
            >
              ByeWind
            </Typography>
          </ListItem>
        </List>

        {/* { <Divider
          sx={{ backgroundColor: "#ffffff", marginY: 2, width: "1px" }}
        />} */}

        {/* Favorites & Recently Section */}
        <List>
          <ListItem
            button
            sx={{ justifyContent: "space-between", paddingX: 2 }}
          >
            <Typography variant="body2" sx={{ color: activeTextColor }}>
              Favorites
            </Typography>
            <Typography variant="body2" sx={{ color: activeTextColor }}>
              Recently
            </Typography>
          </ListItem>
        </List>
        {/* Overview and Projects */}
        <List component="div" disablePadding>
          <ListItem button sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <FiberManualRecordRounded
                fontSize="small"
                sx={{ fontSize: iconFontSize }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Overview"
              sx={{ fontSize: listItemFontSize, color: sidebarTextColor }}
            />
          </ListItem>
          <ListItem button sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <FiberManualRecordRounded
                fontSize="small"
                sx={{ fontSize: iconFontSize }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              sx={{ fontSize: listItemFontSize, color: sidebarTextColor }}
            />
          </ListItem>
        </List>

        {!darkMode &&  <Divider
          sx={{
            backgroundColor: darkMode ? "rgba(255,255,255,0.2)" : "#ffffff",
          }}
        />}

        {/* Dashboards Section */}
        <List
          subheader={
            <ListSubheader component="div" sx={{ color: activeTextColor , backgroundColor: 'transparent'}}>
              Dashboards
            </ListSubheader>
          }
        >
          <ListItem
            button
            onClick={toggleDashboards}
            sx={{
              backgroundColor: activeBackgroundColor,
              paddingLeft: 3,
              border: "0px solid",
              borderRadius: "20px",
              width: "80%",
              marginLeft: "20px",
              borderLeft: "3px solid",
              marginTop: '8px',
            }}
          >
            <ListItemIcon sx={{ color: iconColor }}>
              <ArrowForwardIos
                sx={{
                  fontSize: iconFontSize,
                  transition: "transform 0.3s",
                  transform: openDashboards ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Default"
              sx={{
                fontSize: listItemFontSize,
                color:
                  activeItem === "Default" ? sidebarTextColor : activeTextColor,
              }}
            />
          </ListItem>

          {/* Additional dashboard items */}
          <Collapse in={openDashboards} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("eCommerce")}
              >
                <ListItemText
                  primary="eCommerce"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "eCommerce"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Projects")}
              >
                <ListItemText
                  primary="Projects"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Projects"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Online Courses")}
              >
                <ListItemText
                  primary="Online Courses"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Online Courses"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
        button
        sx={{ paddingLeft: 6 }}
        onClick={() => handleItemClick("Order List")}
      >
        <ListItemText
          primary="Order List"
          sx={{
            fontSize: listItemFontSize,
            color:
              activeItem === "Order List"
                ? sidebarTextColor
                : sidebarTextColor,
          }}
        />
      </ListItem>
            </List>
          </Collapse>
        </List>

        {!darkMode &&  <Divider
          sx={{
            backgroundColor: darkMode ? "rgba(255,255,255,0.2)" : "#ffffff",
          }}
        />}

        {/* Pages Section */}
        <List
          subheader={
            <ListSubheader component="div" sx={{ color: activeTextColor , paddingTop:'2px' , marginTop: '2px', backgroundColor: 'transparent'}}>
              Pages
            </ListSubheader>
          }
        >
          {/* User Profile Section */}
          <ListItem button onClick={toggleUserProfile} sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <ArrowForwardIos
                sx={{
                  fontSize: iconFontSize,
                  transition: "transform 0.3s",
                  transform: openUserProfile ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="User Profile"
              sx={{ fontSize: listItemFontSize }}
            />
          </ListItem>
          <Collapse in={openUserProfile} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("UserProfileOverview")}
              >
                <ListItemText
                  primary="Overview"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "UserProfileOverview"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("UserProfileProjects")}
              >
                <ListItemText
                  primary="Projects"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "UserProfileProjects"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Campaigns")}
              >
                <ListItemText
                  primary="Campaigns"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Campaigns"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Documents")}
              >
                <ListItemText
                  primary="Documents"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Documents"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Followers")}
              >
                <ListItemText
                  primary="Followers"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Followers"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
            </List>
          </Collapse>

          {/* Account Section */}
          <ListItem button onClick={toggleAccount} sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <ArrowForwardIos
                sx={{
                  fontSize: iconFontSize,
                  transition: "transform 0.3s",
                  transform: openAccount ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Account"
              sx={{
                fontSize: listItemFontSize,
                color:
                  activeItem === "Account"
                    ? sidebarTextColor
                    : sidebarTextColor,
              }}
            />
          </ListItem>
          <Collapse in={openAccount} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Account")}
              >
                <ListItemText
                  primary="Account Settings"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Account"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
            </List>
          </Collapse>

          {/* Corporate Section */}
          <ListItem button onClick={toggleCorporate} sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <ArrowForwardIos
                sx={{
                  fontSize: iconFontSize,
                  transition: "transform 0.3s",
                  transform: openCorporate ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Corporate"
              sx={{
                fontSize: listItemFontSize,
                color:
                  activeItem === "Corporate"
                    ? sidebarTextColor
                    : sidebarTextColor,
              }}
            />
          </ListItem>
          <Collapse in={openCorporate} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Corporate")}
              >
                <ListItemText
                  primary="Corporate Settings"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Corporate"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
            </List>
          </Collapse>

          {/* Blog Section */}
          <ListItem button onClick={toggleBlog} sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <ArrowForwardIos
                sx={{
                  fontSize: iconFontSize,
                  transition: "transform 0.3s",
                  transform: openBlog ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Blog"
              sx={{
                fontSize: listItemFontSize,
                color:
                  activeItem === "Blog" ? sidebarTextColor : sidebarTextColor,
              }}
            />
          </ListItem>
          <Collapse in={openBlog} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Blog")}
              >
                <ListItemText
                  primary="Blog Settings"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Blog"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
            </List>
          </Collapse>

          {/* Social Section */}
          <ListItem button onClick={toggleSocial} sx={{ paddingLeft: 3 }}>
            <ListItemIcon sx={{ color: iconColor }}>
              <ArrowForwardIos
                sx={{
                  fontSize: iconFontSize,
                  transition: "transform 0.3s",
                  transform: openSocial ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Social"
              sx={{
                fontSize: listItemFontSize,
                color:
                  activeItem === "Social" ? sidebarTextColor : sidebarTextColor,
              }}
            />
          </ListItem>
          <Collapse in={openSocial} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ paddingLeft: 6 }}
                onClick={() => handleItemClick("Social")}
              >
                <ListItemText
                  primary="Social Settings"
                  sx={{
                    fontSize: listItemFontSize,
                    color:
                      activeItem === "Social"
                        ? sidebarTextColor
                        : sidebarTextColor,
                  }}
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  );
}

export default Sidebar;
