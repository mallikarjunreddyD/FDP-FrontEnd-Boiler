import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import { json, useNavigate } from 'react-router-dom';
import { connectToMetamask } from '../../helpers/EthereumHelper';
import Box from '@mui/material/Box';
import { getUser } from '../../services/ApiService';
import { UserContext } from '../../contexts/UserContext';

const Connect = () => {
  const navigate = useNavigate();
  const  setAddress  = useContext(UserContext); // Get setAddress from context

  const connect = async () => {
  const signer = await connectToMetamask();
    if (signer) {
      const address = await signer.getAddress();
      console.log(address)
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Full height of the viewport
    >
      <Button variant="contained" color="primary" onClick={connect}>Login with Metamask</Button>
    </Box>
  );
};

export default Connect;