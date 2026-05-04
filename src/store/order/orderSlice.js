import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderNumber: null,
    status: "pending",
    shoppingCartId: "",
    total: 0,
  },

  reducers: {
    createOrder: (state, action) => {
      state.orderNumber = action.payload.orderNumber;
      state.status = action.payload.status;
      state.shoppingCartId = action.payload.shoppingCartId;
      state.total = action.payload.total;
    },
  },
});

export const { createOrder } = orderSlice.actions;
