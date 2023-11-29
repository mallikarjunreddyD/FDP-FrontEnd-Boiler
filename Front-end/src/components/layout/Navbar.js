import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">Blockchain UnChained</Button>          
        </Typography>
        <Button color="inherit" component={Link} to="/connect">Connect</Button>
         <Button color="inherit" component={Link} to="/register">Register</Button>
         <Button color="inherit" component={Link} to="/decision">Decision</Button> 
         <Button color="inherit" component={Link} to="/participants">Participants</Button>
         <Button color="inherit" component={Link} to="/redeem">Redeem</Button> 
         <Button color="inherit" component={Link} to="/mint">Mint</Button> 
         <Button color="inherit" component={Link} to="/certificates">Certificates</Button> 

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;