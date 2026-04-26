import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
  },

  reducers: {
    createOrder: (state, action) => {
      state.order = action.payload.order;
    },
  },
});

export const { createOrder } = orderSlice.actions;
