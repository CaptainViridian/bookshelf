import {
  createBook, deleteBook, getBook, updateBook,
} from 'db';
import { actions } from './reducer';

const {
  adding,
  added,
  removing,
  removed,
  editing,
  edited,
  fetching,
  fetched,
  addingComment,
  commentAdded,
  removingComment,
  commentRemoved,
} = actions;

export const fetchBook = (id) => async (dispatch) => {
  dispatch(fetching());
  const book = await getBook(id);
  dispatch(fetched(book));
};

export const addBook = (book) => async (dispatch) => {
  dispatch(adding());
  const id = await createBook(book);
  dispatch(added({ ...book, id }));
};

export const removeBook = (id) => async (dispatch) => {
  dispatch(removing());
  await deleteBook(id);
  dispatch(removed);
};

export const editBook = (book) => async (dispatch) => {
  dispatch(editing());
  await updateBook(book);
  dispatch(edited(book));
};

export const addComment = (comment) => async (dispatch) => {

};

export const removeComment = (id) => async (dispatch) => {

};
