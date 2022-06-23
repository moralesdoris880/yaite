import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const chatroomSlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    all: (state,action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { all } = chatroomSlice.actions

export default chatroomSlice.reducer