import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'redux/baseQuery';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery,
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: () => [{ type: 'Contacts' }],
    }),
    addContact: builder.mutation({
      query: () => '/contacts',
      method: 'POST',
      providesTags: () => [{ type: 'Contacts' }],
    }),
    deleteContact: builder.mutation({
      query: () => '/contact/{id}',
      method: 'DELETE',
      providesTags: () => [{ type: 'Contacts' }],
    }),
  }),
});

export const { useFetchContactsQuery } = contactsAPI;
