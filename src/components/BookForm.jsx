import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Categories } from 'utils/constants';
import { bookType } from '../utils/types';
import { isEmptyObject } from '../utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
  },
  form: {
    [theme.breakpoints.up('sm')]: {
      width: theme.breakpoints.values.sm / 2,
    },
    [theme.breakpoints.up('md')]: {
      width: theme.breakpoints.values.sm,
    },
    [theme.breakpoints.up('xl')]: {
      width: theme.breakpoints.values.md,
    },
  },
  formFields: {
    padding: theme.spacing(2, 0),
  },
  formActions: {
    paddingTop: theme.spacing(3),
  },
  select: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const FormTextField = (props) => (
  <Grid item>
    <TextField required fullWidth {...props} />
  </Grid>
);

const BookForm = ({
  onSubmit, onCancel, book = {}, loading,
}) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const {
    title, author, description, category,
  } = formData;

  const handleChange = (prop) => ({ target: { value } }) => {
    setFormData({ ...formData, [prop]: value });
  };

  useEffect(() => {
    setFormData(book);
  }, [book]);

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">
        {!isEmptyObject(book) ? 'Edit' : 'New'}
        {' '}
        Book
      </Typography>
      {!loading
        ? (
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            <Grid container direction="column" spacing={2} className={classes.formFields}>
              <FormTextField value={title} label="Title" onChange={handleChange('title')} />
              <FormTextField value={author} label="Author" onChange={handleChange('author')} />
              <FormTextField
                value={description}
                onChange={handleChange('description')}
                label="Description"
                multiline
                rows={2}
                rowsMax={4}
              />
              <Grid item>
                <InputLabel className={classes.label} id="select-label">Category</InputLabel>
                <Select
                  value={category}
                  onChange={handleChange('category')}
                  labelId="select-label"
                  label="Category"
                  className={classes.select}
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {Object.values(Categories)
                    .filter((c) => c !== Categories.noCategory)
                    .map((c) => (
                      <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </Select>
              </Grid>
            </Grid>
            <Grid container alignItems="flex-end" justify="space-between" className={classes.formActions}>
              <Grid item>
                <Button onClick={onCancel} variant="contained" color="default">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  {!isEmptyObject(book) ? 'Update' : 'Add'}
                  {' '}
                  Book
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : null}
    </Paper>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  book: bookType,
};

export default BookForm;
