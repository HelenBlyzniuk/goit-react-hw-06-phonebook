import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


export const contactSlice=createSlice({
    name:'contacts',
    initialState:initialState.contacts,
    reducers:{
        addContact:(state,{payload})=>{
            state.push(payload)
        },
        removeContact:(state,{payload})=>{
            state.filter(contact => contact.id !== payload)
        },
    }
})