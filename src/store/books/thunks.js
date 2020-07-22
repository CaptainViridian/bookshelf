import { getAllBooks } from 'db';
import { actions } from './reducer';

const { fetching, fetched } = actions;

export const fetchBooks = () => async (dispatch) => {
  dispatch(fetching());
  const books = await getAllBooks();
  dispatch(fetched({ books }));
};

export const fetchBooksByCategory = (category) => async (dispatch) => {
  dispatch(fetching());
  const allBooks = await getAllBooks();
  const books = allBooks.filter((book) => book.category === category);
  dispatch(fetched({ books }));
};
