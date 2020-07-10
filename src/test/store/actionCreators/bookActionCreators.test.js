import { actions } from 'store/book/reducer';

import { book, comment, fetchedComment } from 'test/mocks';

describe('Book actions', () => {
  it('should create an action for an added book', () => {
    const newBook = book();
    const expectedAction = {
      type: actions.added.toString(),
      payload: newBook,
    };
    expect(actions.added(newBook)).toStrictEqual(expectedAction);
  });

  it('should create an action for a book being removed', () => {
    const expectedAction = {
      type: actions.removing.toString(),
      payload: undefined,
    };

    expect(actions.removing()).toStrictEqual(expectedAction);
  });

  describe('Comments actions', () => {
    it('should create an action for a comment added to a book', () => {
      const newComment = comment();
      const expectedAction = {
        type: actions.commentAdded.toString(),
        payload: newComment,
      }

      expect(actions.commentAdded(newComment)).toStrictEqual(expectedAction);
    });

    it('should create an action for a removed comment', () => {
      const removedComment = fetchedComment();
      const expectedAction = {
        type: actions.commentRemoved.toString(),
        payload: removedComment,
      };

      expect(actions.commentRemoved(removedComment)).toStrictEqual(expectedAction);
    });
  });
});