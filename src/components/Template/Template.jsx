import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { childrenType } from 'utils/types';

import Header from './Header';

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: `calc(100vh - ${theme.spacing(10)}px)`,
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(5, 2),
    color: 'white',
  },
  content: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Template = ({ children, loading = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Header />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};

Template.propTypes = {
  children: childrenType.isRequired,
  loading: PropTypes.bool,
};

export default Template;
