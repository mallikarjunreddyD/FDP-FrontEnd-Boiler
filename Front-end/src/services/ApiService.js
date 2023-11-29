import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getUser = async (address) => {
  try {
    console.log("get User")
  } catch (error) {
    console.error(`Failed to fetch user: ${error}`);
    throw error;
  }
};
export const registerUser = async (user) => {
    try {
        console.log("I am here!");
    } catch (error) {
      console.error(`Failed to register user: ${error}`);
      throw error;
    }
  };

  export const decideUser = async (user) => {
    try {
        console.log("I am here!");
    } catch (error) {
      console.error(`Failed to decide user: ${error}`);
      throw error;
    }
  };

  export const redeemTokens = async (user) => {
    try {
        console.log("I am in redeemTokens!");
    } catch (error) {
      console.error(`Failed to decide user: ${error}`);
      throw error;
    }
  };

  export const mintCertificate = async (user) => {
    try {
        console.log("I am in mintCertificate!");
    } catch (error) {
      console.error(`Failed to decide user: ${error}`);
      throw error;
    }
  };
  
  export const getParticipantsList = async (user) => {
    try {
        console.log("I am in getParticipantsList!");
    } catch (error) {
      console.error(`Failed to decide user: ${error}`);
      throw error;
    }
  };

  export const getNFTsList = async (user) => {
    try {
        console.log("I am in getNFTsList!");
    } catch (error) {
      console.error(`Failed to decide user: ${error}`);
      throw error;
    }
  };