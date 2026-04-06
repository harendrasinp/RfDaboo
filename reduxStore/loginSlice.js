import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageStatus: false,
}

const authSlice = createSlice({
  name: 'loginpage',
  initialState,
  reducers: {
    loginOpen: (state) => {
      state.pageStatus = true;
    },
    loginClose: (state) => {
      state.pageStatus = false;
    }
  }
})

export const {loginOpen, loginClose} = authSlice.actions
export default authSlice.reducer