import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from 'common';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const baseAPI = createApi({
  baseQuery,
  endpoints: () => ({}),
});
