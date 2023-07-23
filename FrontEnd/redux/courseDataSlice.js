import { createSlice } from "@reduxjs/toolkit"

const courseDataSlice = createSlice({
  name: 'course',
  initialState: {
    data: {}
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload
    }
  }
})

export const { setData } = courseDataSlice.actions
export default courseDataSlice.reducer