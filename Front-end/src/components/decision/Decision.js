import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { decideUser } from '../../services/ApiService';


const Decision = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const address = location.state?.address || '';
  
    const [participant, d ] = useState('');
    const decision = async (event) => {
        event.preventDefault();
        try {
          const response = await decideUser({  });
        } catch (error) {
          console.error('Failed to decide:', error);
        }
    };
    return(
        <Box
        component="form"
        onSubmit={decision}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" // Full height of the viewport
      >
         <TextField
                  type="text"
                  className="form-control"
                  id="participant"
                  aria-describedby="mintHelp"
                  placeholder="participant address"
                /> 
         <TextField
                  type="text"
                  className="form-control"
                  id="decision"
                  aria-describedby="mintHelp"
                  placeholder="decison 0/1"
    
                />
         <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        margin="normal"
      >
        Accept/Reject
      </Button>
      </Box>
    )
};

export default Decision;