import { createSlice } from "@reduxjs/toolkit"

const homeDataSlice = createSlice({
  name: 'home',
  initialState: {
    data: {}
  },
  reducers: {
    setHomeData(state, action) {
      state.data = action.payload
    }
  }
})

export const { setHomeData } = homeDataSlice.actions
export default homeDataSlice.reducer