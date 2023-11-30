import React, { useState, useEffect } from 'react';

function MetaMaskComponent() {
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

  return (
    <div>
      <h1>MetaMask Component</h1>
      <p>Current Ethereum Address: {currentAccount || 'Not connected'}</p>
    </div>
  );
}

export default MetaMaskComponent;
