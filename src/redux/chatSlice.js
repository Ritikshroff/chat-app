import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: 'User1', 
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({ ...action.payload, sender: state.currentUser });
    },
    receiveMessage: (state, action) => {
      state.messages.push({ ...action.payload, sender: 'Bot' });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
