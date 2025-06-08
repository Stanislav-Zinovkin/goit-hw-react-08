import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import   { setAuthHeader, clearAuthHeader } from "../api";
import { notifyError, notifySuccess } from "../../Notification/Notification";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register",
    async(credentials, thunkAPI) => {
        try{
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token);
            notifySuccess("You logged in!");
            return res.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(notifyError("Something went wrong:("));
            }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async(credentials, thunkAPI) => {
        try{
            const res = await axios.post("/users/login", credentials);
            setAuthHeader(res.data.token);
            localStorage.setItem("token", res.data.token);
            notifySuccess("You logged in!");
            return res.data;
        }catch (error) {
            
            return thunkAPI.rejectWithValue(notifyError("Something went wrong:("));
        }
    }
);
export const logOut = createAsyncThunk(
    "auth/logout",
    async(_, thunkAPI) => {
        try{
            await axios.post("/users/logout");
            clearAuthHeader();
            localStorage.removeItem("token");
            notifySuccess("You logged out, bye!");
            return
        }catch (error) {
            return thunkAPI.rejectWithValue(notifyError("Something went wrong:("));
        }
    }
);
export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token || localStorage.getItem("token");
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue(notifyError("Can't fetch user"));
        }
        try {
            setAuthHeader(persistedToken);
            const res = await axios.get("users/current");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(notifyError("Something went wrong:("));
        }
    }
)