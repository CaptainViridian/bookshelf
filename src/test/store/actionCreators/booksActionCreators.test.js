import { actions } from 'store/books/reducer';

describe('Books actions', () => {
  it('should create an action for books being fetched', () => {
    const expectedAction = {
      type: actions.fetching.toString(),
      payload: undefined,
    };
    expect(actions.fetching()).toStrictEqual(expectedAction);
  });

  it('should create an action for fetched books', () => {
    const createdAction = actions.fetched({ books: [] });

    expect(createdAction).toHaveProperty('type', actions.fetched.toString());
    expect(createdAction.payload.books).toBeDefined();
  });
});
