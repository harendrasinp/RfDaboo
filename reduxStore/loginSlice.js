import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageStatus: false,
}

const authSlice = createSlice({
  name: 'loginpage',
  initialState,
  reducers: {
    loginpageStatus: (state) => {
      if(state.pageStatus ==true){
        state.pageStatus = false;
      }
        else{
            state.pageStatus = true;
        }
    }
  }
})

export const {loginpageStatus} = authSlice.actions
export default authSlice.reducer