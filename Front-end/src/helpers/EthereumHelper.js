import { ethers } from 'ethers';

export const connectToMetamask = async () => {
    // Check if Metamask is installed
    if (!window.ethereum) {
        alert('Please install Metamask');
        return;
    }
    // Request account access
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        alert('Access to your Ethereum account rejected');
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider.getSigner())
    return provider.getSigner();  // returns the user's signer
};

export const setUserRole = async (role, signer) => {
    // Get the contract address and ABI
    // const contractAddress = 'contract-address';
    // const contractABI = 'contract-ABI';

    return true;
    
};  