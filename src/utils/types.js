import PropTypes from 'prop-types';

export const bookType = PropTypes.shape({
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  timestamp: PropTypes.number,
});

export const childrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const arrayOfBook = PropTypes.arrayOf(bookType);
