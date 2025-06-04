import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';
import { selectContacts } from "./selectors";
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
   
    extraReducers: builder => {
        builder
         .addCase(fetchContacts.pending,(state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchContacts.fulfilled,(state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
         })
         .addCase(fetchContacts.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
         .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
          })
          .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          
          .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload);
          })
          .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    }
});


export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase().trim();
        if (!normalizedFilter) return contacts;
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
)


export default contactSlice.reducer;