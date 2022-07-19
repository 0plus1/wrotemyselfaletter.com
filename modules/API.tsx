import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000,
  headers: {'Accept': 'application/json'}
});

export const createLetter = (email: string, message: string, deliverAt: Date) => {
  return instance.post('letter/create', {
    email,
    message,
    deliverAt: deliverAt.toISOString().split('T')[0],
  });
}