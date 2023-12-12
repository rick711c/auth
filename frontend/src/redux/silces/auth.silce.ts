import {type PayloadAction , createSlice } from '@reduxjs/toolkit';
import { IAuthState, IAuthStateInitialState } from '../redux.constants';
// Redux Toolkit slice
export const authSlice = createSlice({
  name: 'auth',
  initialState :IAuthStateInitialState,

  reducers: {
    authRequested: (state:IAuthState,action:PayloadAction<any>) => {
      
      return {
        ...state,isLoading:true
      }
    },
    authSuccess: (state:IAuthState,action:PayloadAction<any>) => {
     return {
      isAuthenticated:true,
      isLoading:false,
      userDetails:action.payload
     }
    },
    authFailed: (state:IAuthState, action:PayloadAction<any>) => {
      return {
        isAuthenticated:false,
        isLoading:false,
        userDetails:null
      }
    },
  },
 
  
});
export const { authRequested, authSuccess, authFailed } = authSlice.actions;

export const authReducer= authSlice.reducer;
