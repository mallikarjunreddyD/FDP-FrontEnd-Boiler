import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/ApiService';


const Register = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const address = location.state?.address || '';
  
    const [name, affliation] = useState('');
    const register = async (event) => {
        event.preventDefault();
        try {
          const response = await registerUser({  });
        } catch (error) {
          console.error('Failed to register user:', error);
        }
    };
    return(
        <Box
        component="form"
        onSubmit={register}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" // Full height of the viewport
      >
         <TextField
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="mintHelp"
                  placeholder="Name"
                /> 
         <TextField
                  type="text"
                  className="form-control"
                  id="affiliation"
                  aria-describedby="mintHelp"
                  placeholder="Affiliation"
    
                />
         <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        margin="normal"
      >
        Register
      </Button>
      </Box>
    )
};

export default Register;