import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    endpoints: build => ({}),
});
