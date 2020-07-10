import { createSlice } from '@reduxjs/toolkit';
import {
  bookAdded,
  removingBook,
  bookRemoved,
  bookEdited,
  commentAdded,
  commentRemoved,
} from '../book/actions';

const loading = state => {
  state.loading = true;
};

const initialState = { content: [], loading: false };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetching: loading,
    fetched: (state, { payload: { books } }) => {
      state.content = books;
      state.loading = false;
    },
  },
  extraReducers: {
    [bookAdded]: (state, { payload }) => {
      state.content.push(payload);
    },
    [removingBook]: loading,
    [bookRemoved]: (state, { payload: { id } }) => {
      state.content = state.content.filter(b => b.id !== id);
      state.loading = false;
    },
    [bookEdited]: (state, { payload }) => {
      const { id } = payload;
      const pos = state.content.findIndex(book => book.id === id);
      state.content.splice(pos, 1, payload);
    },
    [commentAdded]: (state, { payload }) => {
      const { parentId: bookId } = payload;
      const bookPos = state.content.findIndex(book => book.id === bookId);
      state.content[bookPos].comments.push(payload);
    },
    [commentRemoved]: (state, { payload: { id, parentId: bookId } }) => {
      const bookPos = state.content.findIndex(b => b.id === bookId);
      const commentPos = state.content[bookPos].comments.findIndex(c => c.id === id);
      state.content[bookPos].comments.splice(commentPos, 1);
    },
  },
});

export const { actions } = booksSlice;

export default booksSlice.reducer;