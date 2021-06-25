import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    flex: '1 1 80%',
    margin: '.5rem 2rem',
    marginTop: '1.6em',
    verticalAlign: 'center'
  },
  searchCriterionTextField: { width: '80%' },
  searchButton: {
    width: '20%',
    height: 56,
    border: '.4rem solid red',
    color: 'yellow',
    background: '#00A1E0'
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
