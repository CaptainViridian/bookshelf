import reducer, { actions } from 'store/book/reducer';

import { fetchedBook, fetchedComment } from 'test/mocks';

describe('Book reducer', () => {
  const initialState = () => ({ item: {}, loading: false });

  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toStrictEqual(initialState());
  });

  it('should handle fetching', () => {
    expect(
      reducer(undefined, actions.fetching()),
    ).toStrictEqual({
      ...initialState(),
      loading: true,
    });
  });

  it('should handle fetched', () => {
    const book = fetchedBook();

    expect(reducer({
      ...initialState(),
      loading: true,
    }, actions.fetched(book))).toStrictEqual({
      item: book,
      loading: false,
    });
  });

  it('should handle added', () => {
    const createdBook = fetchedBook();

    expect(reducer({
      ...initialState(),
      loading: true,
    }, actions.added(createdBook))).toStrictEqual({
      item: createdBook,
      loading: false,
    });
  });

  it('should handle removed', () => {
    const bookToRemove = fetchedBook();

    expect(reducer({
      item: bookToRemove,
      loading: true,
    }, actions.removed(bookToRemove))).toStrictEqual({
      item: {},
      loading: false,
    });
  });

  it('should handle edited', () => {
    const originalBook = fetchedBook();
    const editedBook = {
      ...originalBook,
      title: 'Edited title',
    };

    expect(reducer({
      item: originalBook,
      loading: true,
    }, actions.edited(editedBook))).toStrictEqual({
      item: editedBook,
      loading: false,
    });
  });

  it('should handle comment added', () => {
    const bookWithComment = fetchedBook();

    expect(reducer({
      item: { ...bookWithComment, comments: [] },
      loading: true,
    }, actions.commentAdded(fetchedComment()))).toStrictEqual({
      item: bookWithComment,
      loading: false,
    });
  });

  it('should handle comment removed', () => {
    const bookWithComment = fetchedBook();

    expect(reducer({
      item: bookWithComment,
      loading: true,
    }, actions.commentRemoved(fetchedComment()))).toStrictEqual({
      item: { ...bookWithComment, comments: [] },
      loading: false,
    });
  });
});
