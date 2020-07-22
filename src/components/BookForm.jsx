import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  Button,
  FormControl,
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
  },
}));

const FormTextField = (props) => (
  <Grid item>
    <TextField required fullWidth {...props} />
  </Grid>
);

const BookForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const handleChange = (prop) => ({ target: { value } }) => {
    setFormData({ ...formData, [prop]: value });
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">New Book</Typography>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <Grid container direction="column" spacing={2} className={classes.formFields}>
          <FormTextField label="Title" onChange={handleChange('title')} />
          <FormTextField label="Author" onChange={handleChange('author')} />
          <FormTextField
            onChange={handleChange('description')}
            label="Description"
            multiline
            rows={2}
            rowsMax={4}
          />
          <Grid item>
            <FormControl className={classes.select}>
              <InputLabel className={classes.label} id="select-label">Category</InputLabel>
              <Select
                onChange={handleChange('category')}
                labelId="select-label"
                label="Category"
              >
                <MenuItem value={null}>
                  <em>None</em>
                </MenuItem>
                {Object.values(Categories)
                  .filter((c) => c !== Categories.noCategory)
                  .map((c) => (
                    <MenuItem value={c}>{c}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end" justify="flex-end" className={classes.formActions}>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">Add Book</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
