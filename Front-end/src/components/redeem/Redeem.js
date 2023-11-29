import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { redeemTokens } from '../../services/ApiService';


const Redeem = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const address = location.state?.address || '';
      
    const redeem = async (event) => {
        event.preventDefault();
        try {
          const response = await redeemTokens({  });
        } catch (error) {
          console.error('Failed to redeemTokens:', error);
        }
    };
    return(
        <Box
        component="form"
        onSubmit={redeem}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" // Full height of the viewport
      >         
         <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        margin="normal"
      >
        Redeem Tokens
      </Button>
      </Box>
    )
};

export default Redeem;