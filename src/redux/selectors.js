export const selectIsLoggedin = store => store.auth.token !== null && store.auth.user.name !== null;

export const selectIsRefreshingUser = store => store.auth.token !== null && store.auth.user.name === null;

export const selectToken = store => store.auth.token;

export const selectUser = store => store.auth.user;

export const selectContacts = store => store.phonebook.contacts; //??//??//??//??//??//??//
