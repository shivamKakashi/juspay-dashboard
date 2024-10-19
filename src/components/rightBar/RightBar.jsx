import React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  Divider,
} from '@mui/material';

const RightBar = () => {
  const notificationsData = [
    { id: 1, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/bugIcon.png', message: 'You have a bug that needs...' },
    { id: 2, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/profileIcon.png', message: 'New User Registered' },
    { id: 3, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/bugIcon.png', message: 'You have a bug that needs...' },
    { id: 4, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/signal.png', message: 'Andi Lane subscribed to you' },
  ];
  const activitiesData = [
    { id: 1, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/IconSet (5).png', message: 'You have a bug that needs...' },
    { id: 2, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/Female05.png', message: 'Released a new Version' },
    { id: 3, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/3D08.png', message: 'Released a new Version' },
    { id: 4, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/Male07.png', message: 'Modified A data in Page X' },
    { id: 5, icon: 'https://shivamKakashi.github.io/juspay-dashboard/icons/Male11.png', message: 'Deleted a page in Project X' },
    
  ];
  const contactsData = [
    { id: 1, avatar: 'https://shivamKakashi.github.io/juspay-dashboard/icons/IconSet (6).png', name: 'Natali Craig' },
    { id: 2, avatar: 'https://shivamKakashi.github.io/juspay-dashboard/icons/IconSet (7).png', name: 'Drew Cano' },
    { id: 3, avatar: 'https://shivamKakashi.github.io/juspay-dashboard/icons/IconSet (8).png', name: 'Orlando Diggs' },
  ];

  const cardStyles = {
    marginBottom: 2, // Adds spacing between cards
    borderRadius: 4, // Make corners rounder
    boxShadow: 'none', // Subtle shadow
  };

  return (
    <Box sx={{ width: 200, padding: 0 }}>
      {/* Notifications Section */}
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <List>
            {notificationsData.map((notification) => (
              <ListItem key={notification.id}>
                <ListItemAvatar>
                  <Avatar src={notification.icon}
                    alt="Notification Icon" sx={{ backgroundColor: '#4CAF50', color: '#fff' }} />
                    
                </ListItemAvatar>
                <Typography variant="body2">{notification.message}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Activities Section */}
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Activities
          </Typography>
          <List>
            {activitiesData.map((activity) => (
              <ListItem key={activity.id}>
                <ListItemAvatar>
                <Avatar src={activity.icon}
                    alt="Notification Icon" sx={{ backgroundColor: '#4CAF50', color: '#fff' }} />
                </ListItemAvatar>
                <Typography variant="body2">{activity.message}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Contacts Section */}
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Contacts
          </Typography>
          <List>
            {contactsData.map((contact) => (
              <ListItem key={contact.id}>
                <ListItemAvatar>
                  <Avatar src={contact.avatar}
                    alt="Notification Icon" sx={{ backgroundColor: '#4CAF50', color: '#fff' }} />
                </ListItemAvatar>
                <Typography variant="body2">{contact.name}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RightBar;
