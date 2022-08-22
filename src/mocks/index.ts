export const getBatchesResponse = {
  data: [
    {
      id: 1,
      name: 'Batch 2',
      startIccid: '89148000004419075844',
      startImsi: '232123212332122',
      count: 10,
      isActive: false,
      createdAt: '2022-08-22T08:10:43.365Z',
      updatedAt: '2022-08-22T08:10:43.365Z',
    },
    {
      id: 2,
      name: 'Batch 1',
      startIccid: '89520400007800343321',
      startImsi: '334140000000228',
      count: 10,
      isActive: true,
      createdAt: '2022-08-22T09:29:56.335Z',
      updatedAt: '2022-08-22T09:29:56.335Z',
    },
    {
      id: 3,
      name: 'Batch 1',
      startIccid: '89520400007800343321',
      startImsi: '334140000000228',
      count: 10,
      isActive: true,
      createdAt: '2022-08-22T09:30:29.185Z',
      updatedAt: '2022-08-22T09:30:29.185Z',
    },
  ],
  meta: {
    page: {
      number: 1,
      size: 1,
      total: 3,
    },
  },
};

export const createBatchResponse = {
  data: {
    id: 4,
    name: 'Batch 1',
    startIccid: '89520400007800343321',
    startImsi: '334140000000228',
    count: 10,
    isActive: true,
    createdAt: '2022-08-22T09:31:49.918Z',
    updatedAt: '2022-08-22T09:31:49.918Z',
  },
};

export const createBatchRequest = {
  name: 'Batch 1',
  startIccid: '89520400007800343321',
  startImsi: '334140000000228',
  count: 10,
  isActive: true,
};

export const getSimsResponse = {
  data: [
    {
      id: 1,
      iccid: '89148000004419075858',
      imsi: '232123212332123',
      isActive: true,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.377Z',
      updatedAt: '2022-08-22T08:10:43.377Z',
    },
    {
      id: 2,
      iccid: '89148000004419075869',
      imsi: '232123212332124',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.387Z',
      updatedAt: '2022-08-22T08:10:43.387Z',
    },
    {
      id: 3,
      iccid: '89148000004419075870',
      imsi: '232123212332125',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.394Z',
      updatedAt: '2022-08-22T08:10:43.394Z',
    },
    {
      id: 4,
      iccid: '89148000004419075881',
      imsi: '232123212332126',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.403Z',
      updatedAt: '2022-08-22T08:10:43.403Z',
    },
    {
      id: 5,
      iccid: '89148000004419075892',
      imsi: '232123212332127',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.410Z',
      updatedAt: '2022-08-22T08:10:43.410Z',
    },
    {
      id: 6,
      iccid: '89148000004419075905',
      imsi: '232123212332128',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.418Z',
      updatedAt: '2022-08-22T08:10:43.418Z',
    },
    {
      id: 7,
      iccid: '89148000004419075916',
      imsi: '232123212332129',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.466Z',
      updatedAt: '2022-08-22T08:10:43.466Z',
    },
    {
      id: 8,
      iccid: '89148000004419075927',
      imsi: '232123212332130',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.474Z',
      updatedAt: '2022-08-22T08:10:43.474Z',
    },
    {
      id: 9,
      iccid: '89148000004419075938',
      imsi: '232123212332131',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.483Z',
      updatedAt: '2022-08-22T08:10:43.483Z',
    },
    {
      id: 10,
      iccid: '89148000004419075949',
      imsi: '232123212332132',
      isActive: false,
      batchId: 1,
      createdAt: '2022-08-22T08:10:43.489Z',
      updatedAt: '2022-08-22T08:10:43.489Z',
    },
  ],
  meta: {
    page: {
      number: 1,
      size: 1,
      total: 40,
    },
  },
};

export const updateSimRequest = {
  imsi: '232123212332123',
  isActive: true,
};

export const updateSimResponse = {
  data: {
    id: 1,
    iccid: '89148000004419075858',
    imsi: '232123212332123',
    isActive: true,
    batchId: 1,
    createdAt: '2022-08-22T08:10:43.377Z',
    updatedAt: '2022-08-22T08:10:43.377Z',
  },
};
