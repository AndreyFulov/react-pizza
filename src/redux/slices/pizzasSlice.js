import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ currentPage, activeCategory, sortTypes, activeSort, searchValue }) => {
    const { data } = await axios.get(
      `https://64b7eace21b9aa6eb079470b.mockapi.io/pizzas?page=${currentPage + 1}&limit=4${
        activeCategory > 0 ? `&category=${activeCategory}` : ``
      }&sortBy=${sortTypes[activeSort]}&order=desc` +
        `${searchValue ? `&search=${searchValue}` : ``}`,
    );
    return data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
