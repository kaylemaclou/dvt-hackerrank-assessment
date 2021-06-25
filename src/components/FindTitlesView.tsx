import React, { useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    flex: '1 1 80%',
    verticalAlign: 'center',
    margin: '.5rem 1.6rem',
    border: '0px dotted #00A1E0'
  },
  searchCriterionTextField: { width: '80%', border: 0 },
  searchButton: {
    width: '20%',
    height: 56,
    border: '2px dotted #00A1E0',
    color: '#00A1E0',
    background: 'yellow'
  }
}));

interface propTypes {
  searchButtonClickHandler: (searchCriterion: string) => void;
}

export default function FindTitlesView({
  searchButtonClickHandler
}: propTypes) {
  const classes = useStyles();
  const [searchCriterion, setSearchCriterion] = useState<string>('');

  return (
    <Paper className={classes.paperContainer}>
      <TextField
        label="Type here to find music..."
        variant="filled"
        className={classes.searchCriterionTextField}
        value={searchCriterion}
        onChange={(event) => {
          setSearchCriterion(event.target.value);
        }}
      />
      <Button
        color="primary"
        className={classes.searchButton}
        onClick={() => {
          searchButtonClickHandler(searchCriterion);
        }}
      >
        Search
      </Button>
    </Paper>
  );
}
