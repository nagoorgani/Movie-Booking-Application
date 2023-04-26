import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { isLoggedIn: false },
    
    reducers: {
        login(state) {
            state.isLoggedIn = true;
            
        },
        logout(state) {
            state.isLoggedIn = false;
        }  
    }
});
const adminSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged:false
    },
    reducers: {
        login(state) {
            state.isLogged = true;
            
        },
        logout(state) {
            state.isLogged = false;
            
        }
    }
})
export const userActions = userSlice.actions;

export const adminActions = adminSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        admin: adminSlice.reducer
    },
});