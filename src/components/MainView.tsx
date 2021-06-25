import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
//import CardView from './CardView.tsx';
import DeezerApiHttpClient from '../services/deezer-api-client-service';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundImage: 'linear-gradient(90deg, #0033A1, #00A1E0);',
    color: 'yellow'
  },

  title: {
    flex: '1 1 80%',
    margin: '.5rem 2rem'
  },
  container: { backgroundColor: 'transparent' },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  gridContainer: {
    padding: '2rem'
  }
}));

export default function MainView() {
  const classes = useStyles();

  async function findTitlesMatchingSearchString(searchString: string) {
    try {
      const titlesFound: Array<Object> =
        await DeezerApiHttpClient.searchForTitle(searchString);
    } catch (error) {
      alert(`An error occured whilst searching for titles. ${error.message}`);
    }
  }

  return (
    <div className={classes.root} style={{ flex: 9 }}>
      <Paper
        className={classes.title}
        style={{ marginTop: '1.6em', verticalAlign: 'center' }}
      >
        <TextField
          id="outlined-basic"
          label="Type here to find music..."
          variant="filled"
          style={{ width: '80%', marginTop: '' }}
        />
        {/* <Button onClick={props.closeHandler} color="primary"> */}
        <Button
          color="primary"
          style={{
            width: '20%',
            height: 56,
            border: '.4rem solid red',
            color: 'yellow',
            background: '#00A1E0'
          }}
        >
          Search
        </Button>
      </Paper>

      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {/* <Grid item xs={12} sm={6} md={4}>
          <CardView
            companyName="Standard Bank South Africa"
            isoCountryCode="za"
            timezone="Africa/Johannesburg"
          />
        </Grid> */}
      </Grid>
    </div>
  );
}
