import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { MetaMaskComponent } from "../../helpers/EthereumHelper";
import { ContractComponent } from "../../helpers/EthereumHelper";
import { ethers } from 'ethers';


const Register = () => {
  let currentAccount = MetaMaskComponent();
  let [contract,provider] = ContractComponent();
  
  const [name, setName] = useState("");
  const [affliation, setAffliation] = useState("");

  const register = async (event) => {
  event.preventDefault();
    try {
      const transaction = await contract.connect(provider.getSigner()).register(name, affliation);
      await transaction.wait();
      console.log(transaction);
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };
  return (
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
        required
        className="form-control"
        id="name"
        aria-describedby="mintHelp"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        type="text"
        className="form-control"
        id="affiliation"
        aria-describedby="mintHelp"
        placeholder="Affiliation"
        value={affliation}
        onChange={(e) => setAffliation(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" margin="normal">
        Register
      </Button>
    </Box>
  );
};

export default Register;
