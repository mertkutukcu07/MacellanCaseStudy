import { MeResponse } from '@/types/me/response'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
    token: string | null
    user: MeResponse | null
}

const initialState: AuthState = {
    token: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ token: string; user: any }>
        ) => {
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: state => {
            state.token = null
            state.user = null
        },
    },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
