import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getSims, getBatches, updateSim, createBatch } from './';
import {
  getSimsResponse,
  getBatchesResponse,
  updateSimRequest,
  updateSimResponse,
  createBatchRequest,
  createBatchResponse,
} from '../mocks';

const { REACT_APP_BASE_URL = 'https://simulator-api.onrender.com/v1/' } =
  process.env;

const mock = new MockAdapter(axios);

describe('Axios services', () => {
  test('should get sims', async () => {
    mock.onGet(`${REACT_APP_BASE_URL}sims`).reply(200, getSimsResponse);
    const response = await getSims();
    expect(response).toEqual(getSimsResponse);
  });

  test('should get batches', async () => {
    mock.onGet(`${REACT_APP_BASE_URL}batches`).reply(200, getBatchesResponse);
    const response = await getBatches();
    expect(response).toEqual(getBatchesResponse);
  });

  test('should create batches', async () => {
    mock.onPost(`${REACT_APP_BASE_URL}batches`).reply(201, createBatchResponse);
    const response = await createBatch(createBatchRequest);
    expect(response).toEqual(createBatchResponse);
  });

  test('should update sim', async () => {
    mock.onPut(`${REACT_APP_BASE_URL}sims/1`).reply(200, updateSimResponse);
    const response = await updateSim(1, updateSimRequest);
    expect(response).toEqual(updateSimResponse);
  });
});
