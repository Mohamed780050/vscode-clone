import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { show: boolean; position: { x: number; y: number } } = {
  show: false,
  position: {
    x: 0,
    y: 0,
  },
};
export const contextmenu = createSlice({
  name: "contextmenu",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    setPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.position = action.payload;
    },
  },
});

export const { setShow, setPosition } = contextmenu.actions;
export default contextmenu.reducer;
