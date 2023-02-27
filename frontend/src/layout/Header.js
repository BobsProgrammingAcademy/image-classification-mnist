import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPencilAlt, faEdit);

const Header = ({ onSidebarMobileOpen }) => {
  const theme = useTheme();
  
  return (
    <>
      <AppBar
        elevation={5}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.secondary
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton
            color='inherit'
            onClick={onSidebarMobileOpen}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon fontSize='medium' />
          </IconButton>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
              <IconButton size='large' disabled>
                <Avatar
                  variant='rounded'
                  sx={{
                    backgroundColor: green[600],
                    height: 52,
                    width: 52,
                    marginRight: '15px'
                  }}
                >
                  <FontAwesomeIcon 
                    icon={faPencilAlt} 
                    tyle={{ 
                      color: '#fff', 
                      height: 30, 
                      width: 30 
                    }} 
                  />
                </Avatar>
                <Typography 
                  variant='h3' 
                  component='div' 
                  sx={{ 
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textDecoration: 'none'
                  }}
                >
                  Image Classification MNIST
                </Typography>
              </IconButton>
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            component='a'
            color='primary'
            href='/'
            size='small'
            variant='text'
            sx={{
              color: theme.palette.text.secondary,
              fontSize: theme.typography.subtitle1,
              fontWeight: 'medium',
              mr: 2,
              '& svg': {
                mr: 0.5
              },
            }}
          >
            <HomeIcon /> Home
          </Button>
          <Button
            component='a'
            color='primary'
            href='/drawing-editor'
            size='small'
            variant='text'
            sx={{
              color: theme.palette.text.secondary,
              fontSize: theme.typography.subtitle1,
              fontWeight: 'medium',
              mr: 2,
              '& svg': {
                mr: 0.5
              },
            }}
          >
            <FontAwesomeIcon 
              icon={faEdit} 
              style={{ height: 23, width: 23 }} 
            /> 
            Drawing Editor
          </Button>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default Header;