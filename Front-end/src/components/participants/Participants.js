import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { MetaMaskComponent } from "../../helpers/EthereumHelper";
import { ContractComponent } from "../../helpers/EthereumHelper";
import { ethers } from 'ethers';

const Participants = () => {
    let currentAccount = MetaMaskComponent();
    let [contract,provider] = ContractComponent();
    let [fullParticipantsData, setfullParticipantsData] = useState([])
    const loadPariticipants = async (event) =>  {
        event.preventDefault();
        let transaction = await contract.numOfParticipants();
        let pariticipantdata = [];
        for(let i=0;i<transaction.toNumber();i++){
            let address = await contract.participantList(i);
            var data = await contract.participants(address);
            let newdata = [...data]
            newdata[4] = newdata[4].toNumber()
            //newdata[0].tokenId = newdata[0].tokenId.toNumber()
            pariticipantdata.push(newdata);
            console.log(pariticipantdata);
        }
        setfullParticipantsData(pariticipantdata)
        return pariticipantdata
    }
    
    
    return(
        <Box
      component="form"
      onSubmit={loadPariticipants}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh" // Full height of the viewport
    > <Button type="submit" variant="contained" color="primary" margin="normal">
    Load Participants
  </Button>
  {fullParticipantsData.length >0 ? (
        <ul>
            {
            fullParticipantsData.map(item => (
                <li >{item}</li>
            ))}
        </ul> ) :(<p>No data</p>)}
</Box>
    )
};

export default Participants;