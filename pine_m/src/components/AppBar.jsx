import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';



export const NavBar = () => {

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  >
        <Toolbar sx={{
          display: "flex", justifyContent: "space-between"
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}

          >
            <MenuIcon />
          </IconButton>
          <img height="30rem" src="logoWhite.svg" alt="Logo" />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

