import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContactsThunk } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    allContact: [],
    isLoading: false,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.err = null;
        state.allContact = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allContact.push(action.payload);
        state.err = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.allContact.findIndex(
          (contact) => contact.id === action.payload,
        );
        state.allContact.splice(idx, 1);
        state.err = null;
      });
    // here are scaling pending and rejected action ↓
    // .addMatcher((action)=>HAS to return similar action type,(state,action)=>{reducer operations with store,state 'PURE mutate functions'})
  },
});

export const contactsReducer = contactsSlice.reducer;
