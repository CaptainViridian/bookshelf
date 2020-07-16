import { createSlice } from '@reduxjs/toolkit';

const loading = (state) => {
  state.loading = true;
};

const initialState = { item: {}, loading: false };

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetching: loading,
    fetched: (state, { payload }) => {
      state.item = payload;
      state.loading = false;
    },
    adding: loading,
    added: (state, { payload }) => {
      state.item = payload;
      state.loading = false;
    },
    removing: loading,
    removed: (state) => {
      state.item = {};
      state.loading = false;
    },
    editing: loading,
    edited: (state, { payload }) => {
      state.item = payload;
      state.loading = false;
    },
    addingComment: loading,
    commentAdded: (state, { payload }) => {
      state.item.comments.push(payload);
      state.loading = false;
    },
    removingComment: loading,
    commentRemoved: (state, { payload: { id } }) => {
      state.loading = false;
      state.item.comments = state.item.comments.filter((c) => c.id !== id);
    },
  },
});

export const { actions } = bookSlice;

export default bookSlice.reducer;
