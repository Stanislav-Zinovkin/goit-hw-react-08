import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {

    try {const response = await axios.get("/Contacts");
    return response.data;}
     catch (error) {return thunkAPI.rejectWithValue(error.message)}
    
} );
export const addContact = createAsyncThunk("contacts/addContacts",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/Contacts", newContact);
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`/Contacts/${contactId}`);
            return contactId;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);