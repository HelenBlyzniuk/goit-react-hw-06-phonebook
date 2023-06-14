import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice=createSlice({
    name:'filter',
    initialState:initialState.filter,
    reducers:{
        filterSet(state,action){
            state=action.payload.toLowerCase();
        }
    }
})
export const filterReducer=filterSlice.reducer;
export const {filterSet}=filterSlice.actions;