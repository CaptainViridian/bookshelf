import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/reducer';
import bookReducer from './book/reducer';
import categoryReducer from './category/reducer';

export default configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    categories: categoryReducer,
  },
});