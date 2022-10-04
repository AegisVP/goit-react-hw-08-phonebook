export const initialUser = {
  name: null,
  email: null,
};

export const initialAuth = {
  user: initialUser,
  token: null,
};

export const initialFilter = {
  search: '',
};

export const initialPhonebook = {
  contacts: null,
  filter: initialFilter,
};

export const initialStore = {
  auth: initialAuth,
  phonebook: initialPhonebook,
};

export const CONSTANTS = {
  BASE_URL: 'https://connections-api.herokuapp.com',
};

