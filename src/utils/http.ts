import axios from 'axios';
import { API_KEY } from './key';

const HTTP = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
  }
});

export default HTTP;