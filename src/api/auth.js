import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const login = async (email, password) => {
  const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
  if (response.data.length > 0) {
    return response.data[0];
  } else {
    throw new Error('Invalid email or password');
  }
};

export const signup = async (username, email, password) => {
  const response = await axios.post(API_URL, { username, email, password });
  return response.data;
};
