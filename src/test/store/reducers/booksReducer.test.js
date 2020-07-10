import { actions } from 'store/books/reducer';
import reducer from 'store/books/reducer';

import * as bookActions from 'store/book/actions';

import { fetchedBook, fetchedComment } from 'test/mocks';

describe('Books reducer', () => {
  const initialState = () => ({ content: [], loading: false });

  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toStrictEqual(initialState());
  });

  it('should handle fetching', () => {
    expect(
      reducer(undefined, actions.fetching())
    ).toStrictEqual({
      ...initialState(),
      loading: true,
    });
  });

  it('should handle fetched', () => {
    const books = [fetchedBook()];

    expect(reducer({
      ...initialState(),
      loading: true,
    }, actions.fetched({ books }))).toStrictEqual({
      content: books,
      loading: false,
    });
  });

  describe('book actions', () => {
    it('should handle bookAdded', () => {
      const addedBook = { ...fetchedBook(), comments: [] };

      expect(
        reducer(initialState(), bookActions.bookAdded(addedBook))
      ).toStrictEqual({ ...initialState(), content: [addedBook] });
    });

    it('should handle bookRemoved', () => {
      const bookToRemove = fetchedBook();

      expect(reducer({ loading: true, content: [bookToRemove] },
        bookActions.bookRemoved(bookToRemove))).toStrictEqual(initialState());
    });

    it('should handle bookEdit', () => {
      const oldBook = fetchedBook();
      const otherBook = { ...oldBook, id: 40 };
      const editedBook = { ...oldBook, title: 'Edited book' };

      expect(reducer({
          ...initialState(),
          content: [otherBook, oldBook]
        }, bookActions.bookEdited(editedBook))
      ).toStrictEqual({ ...initialState(), content: [otherBook, editedBook] });
    });

    it('should handle commentAdded', () => {
      const commentedBook = fetchedBook();
      const bookToComment = { ...commentedBook, comments: [] };

      expect(reducer({ ...initialState(), content: [bookToComment] },
        bookActions.commentAdded(fetchedComment())))
        .toStrictEqual({ ...initialState(), content: [commentedBook] });
    });

    it('should handle commentRemoved', () => {
      const commentedBook = fetchedBook();

      expect(reducer({ ...initialState(), content: [commentedBook] },
        bookActions.commentRemoved(fetchedComment())))
        .toStrictEqual({
          ...initialState(), content: [{
            ...commentedBook, comments: []
          }]
        });
    });
  });
});