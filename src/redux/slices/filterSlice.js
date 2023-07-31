import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: 0,
    sort: 0,
    currentPage: 0,
  },
  reducers: {
    changeCategoryType: (state, action) => {
      state.category = action.payload;
    },
    changeSortType: (state, action) => {
      state.sort = action.payload;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changeCategoryType, changeSortType, changeCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
