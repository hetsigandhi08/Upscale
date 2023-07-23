import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: 'count',
  initialState: {
    data: {
        subCourse:0,
        video:0
    }
  },
  reducers: {
    setCount(state, action) {
      state.data = action.payload
    }
  }
})

export const { setCount } = countSlice.actions
export default  countSlice.reducer