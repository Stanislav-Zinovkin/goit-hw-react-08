import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import   { setAuthHeader } from "../api";
axios.defaults.baseURL = "https://connections-api.goit.global/"

export const fetchContacts = createAsyncThunk("/contacts/fetchAll", async (_, thunkAPI) => {
   const state= thunkAPI.getState();
   const token = state.auth.token;
if (!token) {
   return thunkAPI.rejectWithValue("No token found");
}
  setAuthHeader(token);
    try {const response = await axios.get("/contacts");
    return response.data;}
     catch (error) {return thunkAPI.rejectWithValue(error.message)}
    
} );
export const addContact = createAsyncThunk("/contacts/addContacts",
    async (newContact, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (!token) {
            return thunkAPI.rejectWithValue("No token found");
          }
          setAuthHeader(token);
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const deleteContact = createAsyncThunk("/contacts/deleteContact",
    async (contactId, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
    
        if (!token) {
          return thunkAPI.rejectWithValue("No token found");
        }
    
        setAuthHeader(token);
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);