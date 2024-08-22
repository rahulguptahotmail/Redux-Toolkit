import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clear(state, action) {
      return state.filter((item) => item.id === item.id+1)
    },
  },
});

export const { add, remove,clear } = cartSlice.actions;
export default cartSlice.reducer;
