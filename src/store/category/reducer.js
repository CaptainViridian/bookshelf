import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: { content: [], loading: false },
  reducers: {
    fetching: state => {
      state.loading = true;
    },
    fetched: (state, { payload }) => {
      state.content = payload.categories;
    },
  },
});

export const { actions } = categorySlice;

export default categorySlice.reducer;