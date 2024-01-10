import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'center' ,gap: '20px'}}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {/* <Button color="inherit" component={Link} to="/experience">
          Experience
        </Button> */}
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/aboutme">
          About 
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;