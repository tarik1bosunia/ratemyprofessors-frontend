import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean,
    isLoading: boolean,
    accessToken: string | null,
    refreshToken: string | null,
}

const loadState = (): AuthState => {
    try {
        const serializedState = localStorage.getItem("authState");
        if (serializedState === null) {
            return {
                isAuthenticated: false,
                isLoading: true,
                accessToken: null,
                refreshToken: null,
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            isAuthenticated: false,
            isLoading: true,
            accessToken: null,
            refreshToken: null,
        };
    }
};

const initialState:AuthState = loadState()

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<{access: string, refresh: string}>) => {

            state.accessToken = action.payload.access;
            state.refreshToken = action.payload.refresh;
            state.isAuthenticated = true;
            localStorage.setItem("authState", JSON.stringify(state));
        },
        logout: state => {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("authState");
        },
        finishedInitialLoad: state => {
            state.isLoading = false;
        }

    }
})

export const {setAuth, logout, finishedInitialLoad} = authSlice.actions
export default authSlice.reducer