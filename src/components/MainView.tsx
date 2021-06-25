import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeezerApiHttpClient from '../services/DeezerApiHttpClient';
import FindTitlesView from './FindTitlesView';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundImage: 'linear-gradient(90deg, #0033A1, #00A1E0);',
    color: 'yellow'
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
      console.log(titlesFound);
    } catch (error) {
      alert(`An error occured whilst searching for titles. ${error.message}`);
    }
  }

  return (
    <div className={classes.root} style={{ flex: 9 }}>
      <FindTitlesView
        searchButtonClickHandler={findTitlesMatchingSearchString}
      />
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
