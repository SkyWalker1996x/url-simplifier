import axios, { AxiosInstance } from 'axios';

// for real project this line will be moved to .env file
const apiURL = 'https://spoo.me/';

const headers = {
  'content-type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};

const urlSimplifierApi: AxiosInstance = axios.create({
  baseURL: apiURL,
  headers
});

export default urlSimplifierApi;
