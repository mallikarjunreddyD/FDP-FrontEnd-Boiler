import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { mintCertificate } from '../../services/ApiService';


const Mint = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const address = location.state?.address || '';
  
    const [participant, tokenId, URL ] = useState('');
    const mint = async (event) => {
        event.preventDefault();
        try {
          const response = await mintCertificate({  });
        } catch (error) {
          console.error('Failed to decide:', error);
        }
    };
    return(
        <Box
        component="form"
        onSubmit={mint}
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
                  id="tokenId"
                  aria-describedby="mintHelp"
                  placeholder="Token ID"
    
                />
                <TextField
                  type="text"
                  className="form-control"
                  id="URL"
                  aria-describedby="mintHelp"
                  placeholder="URL"
    
                />
         <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        margin="normal"
      >
        Mint Certificate
      </Button>
      </Box>
    )
};

export default Mint;