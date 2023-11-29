import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getParticipantsList } from '../../services/ApiService';


const Participants = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const address = location.state?.address || '';
      
    const participants = async (event) => {
        event.preventDefault();
        try {
          const response = await getParticipantsList({  });
        } catch (error) {
          console.error('Failed to redeemTokens:', error);
        }
    };
    return(
        <div>{}</div>
    )
};

export default Participants;