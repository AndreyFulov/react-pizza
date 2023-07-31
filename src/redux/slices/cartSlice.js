import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /* addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    }, */
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.unicId === action.payload.unicId,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    decrementItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.unicId === action.payload.unicId,
      );
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter((obj) => obj.unicId !== action.payload.unicId);
        }
        state.totalPrice -= findItem.price;
      }
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.unicId === action.payload.unicId);
      state.totalPrice -= findItem.price * findItem.count;
      state.items = state.items.filter((obj) => obj.unicId !== action.payload.unicId);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
