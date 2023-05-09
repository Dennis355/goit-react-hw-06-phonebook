import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  /// на что срабатывает
  initialState: {
    contacts: [],
    // contacts: [
    //   { id: 'id-1',name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-3',name: 'Annie Copeland', number: '227-91-26' },
    //   { id: 'id-5', name: 'Aline Copand', number: '227-96-26' },
    //   { id: 'id-6', name: 'Appolina Copander', number: '227-96-25' },
    //   { id: 'id-7', name: 'Nigera Coopera', number: '225-96-25' },
    //   { id: 'id-8', name: 'Regina Cobra', number: '25-96-25' },
    //   { id: 'id-9', name: 'Edena Kliente-Cobra', number: '125-96-25' },
    // ],
  
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
