import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {user: null, token:''}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAuth:(state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token; 
        }
    }
})
export const {setAuth}= authSlice.actions
export default authSlice.reducer
