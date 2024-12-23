import axios from 'axios';

const API_URL = 'https://konnect-1.onrender.com/api/users'; 

const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const createUser = async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
};

export default {
    getUsers,
    createUser,
};
