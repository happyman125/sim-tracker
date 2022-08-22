import axios from 'axios';

const { REACT_APP_BASE_URL = 'https://simulator-api.onrender.com/v1/' } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;
axios.interceptors.response.use((response) => {
  return response.data
}, (error) => Promise.reject(error?.response?.data))

export type CreateBatchBody = {
  name: string;
  startIccid: string;
  startImsi: string;
  count: number;
  isActive: boolean;
};

export type UpdateSimBody = {
  imsi?: string;
  isActive?: boolean;
}

export const getSims = (filters = {}) => {
  return axios.get('/sims', {
    params: filters,
  });
}

export const createBatch = (body: CreateBatchBody) => {
  return axios.post('/batches', body)
};

export const updateSim = (id: number, body: UpdateSimBody) => {
  return axios.put(`/sims/${id}`, body)
}

export const getBatches = () => {
  return axios.get('/batches')
};