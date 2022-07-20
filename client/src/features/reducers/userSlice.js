import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{id: null}],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    account: (state,action) => {
      state.value = [action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { account } = userSlice.actions

export default userSlice.reducer