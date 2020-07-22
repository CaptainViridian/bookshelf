export const selectBooks = (state) => state.books.content;

export const selectCategory = (state) => state.books.category;

export const selectOrder = (state) => state.books.order;

export const selectFilterString = (state) => state.books.filterString;

export const loadingBooks = (state) => state.books.loading;
