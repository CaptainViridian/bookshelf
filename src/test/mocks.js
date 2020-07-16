export const book = () => ({
  timestamp: Date.now(),
  title: 'Test Book',
  description: 'Test description',
  author: 'Tester McTest',
  category: 'Test',
  deleted: false,
});

export const comment = () => ({
  parentId: 1,
  timestamp: Date.now(),
  body: 'Test comment',
  author: 'Tester McTest',
  deleted: false,
});

export const fetchedComment = () => ({
  ...comment(),
  id: 1,
});

export const fetchedBook = () => ({
  ...book(),
  id: 1,
  comments: [fetchedComment()],
});
