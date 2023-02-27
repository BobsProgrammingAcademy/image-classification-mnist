import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit as EditIcon } from '@fortawesome/free-regular-svg-icons';
import { faDownload as DownloadIcon } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare as ShareSquareIcon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(EditIcon, DownloadIcon, ShareSquareIcon);

const DescriptionItem = ({ color, icon, title, subtitle }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <ListItem
          component='div'
          disableGutters
          padding='0'
          alignItems='flex-start'
        >
          <ListItemAvatar>
            <Box color={color}>
              <FontAwesomeIcon 
                icon={icon} 
                style={{ height: 40, width: 40 }} 
              />
            </Box>
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={subtitle}
            margin='0'
            primaryTypographyProps={{
              variant: 'h3',
              gutterBottom: true,
              fontWeight: '700'
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1'
            }}
          />
        </ListItem>
      </Grid>
    </>
  );
};

export default DescriptionItem;