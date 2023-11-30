import React, { useState, useEffect } from 'react';
import FDPDAPPABI from "../abis/FDPDAPP.json";
import { ethers } from 'ethers';


 export const MetaMaskComponent = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  useEffect(() => {
    const checkMetaMask = async () => {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Detect account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length > 0) {
            setCurrentAccount(accounts[0]);
          } else {
            setCurrentAccount('');
          }
        });
        // Fetch the current account on component mount
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
        }
      } else {
        console.log('MetaMask not found');
      }
    };

    checkMetaMask();
  }, []);
  return currentAccount;  
}

export const ContractComponent = () => {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
  useEffect(() => {
    async function initEthers() {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_accounts' });
        const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.enable();
        setProvider(ethProvider);
        console.log(ethProvider.getSigner())

      } else {
        console.log('MetaMask not found');
      }
    }
    initEthers();
  }, []);

  useEffect(() => {
    async function loadContract() {
      if (provider) {
        const contractAddress = '0x373Fb7e38855066bFda4C002eD366F2A1cB7BbB0'; // Replace with your contract address
        const deployedContract = new ethers.Contract(contractAddress, FDPDAPPABI, provider);
        setContract(deployedContract);
      }
    }
    loadContract();
  }, [provider]);
  return [contract,provider];
}


