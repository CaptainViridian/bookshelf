import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import {
  AppBar, Grid, Slide, Typography,
} from '@material-ui/core';
import { BookTwoTone as Book } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 3),
    },
  },
  link: {
    textDecoration: 'none',
  },
  icon: {
    marginBottom: theme.spacing(-0.5),
  },
}));

const Header = () => {
  const classes = useStyles();

  const lastScroll = useRef(Number.MAX_SAFE_INTEGER);

  const [show, setShow] = useState(true);

  const handleScroll = useCallback(() => {
    const newScroll = window.scrollY;
    if (newScroll === lastScroll.current) {
      return;
    }
    const shouldShow = newScroll < lastScroll.current;

    setShow(shouldShow);
    lastScroll.current = newScroll;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [handleScroll]);

  return (
    <Slide timeout={600} direction="down" in={show} mountOnEnter unmountOnExit>
      <AppBar className={classes.header} color="default">
        <Link to="/" className={classes.link}>
          <Typography variant="h4" color="primary">
            <Grid container spacing={2}>
              <Grid item>
                <Book className={classes.icon} fontSize="large" />
              </Grid>
              <Grid item>
                BookShelf
              </Grid>
            </Grid>
          </Typography>
        </Link>
      </AppBar>
    </Slide>
  );
};

export default Header;
