import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice=createSlice({
    name:'filter',
    initialState:initialState,
    reducers:{
        filterSet(state,action){
            state.filter=action.payload;
        }
    }
})
export const filterReducer=filterSlice.reducer;
export const {filterSet}=filterSlice.actions;