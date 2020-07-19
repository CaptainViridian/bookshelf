import React from 'react';

import PropTypes from 'prop-types';

import {
  Card, CardActions, CardContent, CardHeader, Grid, Typography, Link as MaterialLink,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';
import { bookType } from 'utils/types';

const DESCRIPTION_MAX_LENGTH = 110;

const useStyles = makeStyles((theme) => ({
  item: {
    maxWidth: theme.breakpoints.values.sm / 2.5,
  },
  link: {
    textDecoration: 'none',
    '&:link': {
      color: 'inherit',
    },
    '&:visited': {
      color: 'inherit',
    },
  },
  content: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  collapseLink: {
    fontSize: '0.9em',
  },
}));

const BookCard = (
  {
    book: {
      title, description, author, timestamp,
    },
    onClickPath,
  },
) => {
  const classes = useStyles();

  const collapseDescription = description.length > DESCRIPTION_MAX_LENGTH;

  return (
    <Grid item xs={12} sm={6} className={classes.item}>
      <RouterLink className={classes.link} to={onClickPath}>
        <Card raised className={classes.card}>
          <CardHeader
            title={(
              <Typography
                variant="h6"
                color="textSecondary"
              >
                {title}
              </Typography>
            )}
            subheader={(
              <Typography variant="subtitle2" color="primary">
                By
                {' '}
                {author}
              </Typography>
            )}
          />
          <CardContent className={classes.content}>
            <Typography variant="body2">
              {description.substring(0, DESCRIPTION_MAX_LENGTH)}
              {collapseDescription && (
                <>
                  ...
                  {' '}
                  <MaterialLink className={classes.collapseLink}>show more</MaterialLink>
                </>
              )}
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.actions}>
            <Typography variant="caption">
              Posted:
              {' '}
              {new Date(timestamp).toLocaleDateString('en-US')}
            </Typography>
          </CardActions>
        </Card>
      </RouterLink>
    </Grid>
  );
};

BookCard.propTypes = {
  book: bookType.isRequired,
  onClickPath: PropTypes.string.isRequired,
};

export default BookCard;
