import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  // prepareHeaders: headers => {
  //   const token = store.auth.token;
  //   if (token) headers.set('Authorization', `Bearer ${token}`);

  //   return headers;
  // },
});
