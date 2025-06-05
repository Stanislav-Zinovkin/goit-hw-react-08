import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import   { setAuthHeader, clearAuthHeader } from "../api";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register",
    async(credentials, thunkAPI) => {
        try{
            const res = await axios.post("users/signup", credentials);
            setAuthHeader(res.data.token);
            return res.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async(credentials, thunkAPI) => {
        try{
            const res = await axios.post("users/login", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        }catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const logOut = createAsyncThunk(
    "auth/logout",
    async(_, thunkAPI) => {
        try{
            const res = await axios.post("users/logout");
            clearAuthHeader();
            return
        }catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Can't fetch user");
        }
        try {
            setAuthHeader(persistedToken);
            const res = await axios.get("users/me");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)