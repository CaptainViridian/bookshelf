import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Fab, Slide } from '@material-ui/core';
import {
  Add as AddIcon,
  Sort as SortIcon,
  DateRange as DateIcon,
  SortByAlpha as AlphaIcon,
} from '@material-ui/icons';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { useScrollListener } from 'utils/hooks';
import { SortMethods } from 'utils/constants';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  actions: {
    position: 'fixed',
    bottom: 0,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: theme.spacing(2.5, 0),
  },
}));

const Actions = ({ addBookClickPath, onClickSort, order }) => {
  const classes = useStyles();
  const scrolledUp = useScrollListener();

  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  const handleCloseSpeedDial = () => setSpeedDialOpen(false);

  function handleSortClick(title) {
    handleCloseSpeedDial();
    onClickSort(title);
  }

  const sortActions = {
    [SortMethods.date]: <DateIcon />,
    [SortMethods.alpha]: <AlphaIcon />,
  };

  return (
    <Slide timeout={600} in={scrolledUp} direction="up">
      <div className={classes.actions}>
        <SpeedDial
          ariaLabel=""
          icon={<SpeedDialIcon icon={sortActions[order]} openIcon={<SortIcon />} />}
          open={speedDialOpen}
          onClose={handleCloseSpeedDial}
          onOpen={() => setSpeedDialOpen(true)}
        >
          {Object.entries(sortActions).map(([title, icon]) => (
            <SpeedDialAction
              tooltipTitle={title}
              icon={icon}
              onClick={() => handleSortClick(title)}
            />
          ))}
        </SpeedDial>
        <Link to={addBookClickPath}>
          <Fab color="primary"><AddIcon /></Fab>
        </Link>
      </div>
    </Slide>
  );
};

Actions.propTypes = {
  addBookClickPath: PropTypes.string.isRequired,
  onClickSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(Object.values(SortMethods)).isRequired,
};

export default Actions;
