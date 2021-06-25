import React, { useState } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import DeezerApiHttpClient from '../services/DeezerApiHttpClient';
import FindTitlesView from './FindTitlesView';
import CardView from './CardView';

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
  const [titles, setTitles] = useState<Array<Object>>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] =
    useState<boolean>(false);

  async function findTitlesMatchingSearchString(searchString: string) {
    try {
      if (!searchString.trim()) return;
      const titlesFound: Array<Object> =
        await DeezerApiHttpClient.searchForTitles(searchString);
      //@ts-ignore
      if (titlesFound['error']) {
        setTitles([]);
        //@ts-ignore
        throw new Error(
          //@ts-ignore
          `Unable to call the Deezer API. ${titlesFound['error']['message']}`
        );
      } else {
        console.log(titlesFound);
        //@ts-ignore
        setTitles(titlesFound['data']);
      }
    } catch (error) {
      setErrorMessage(
        `An error occured whilst searching for titles. ${error.message}`
      );
      setIsErrorSnackbarOpen(true);
    }
  }

  return (
    <>
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
          {titles &&
            titles.map((title) => (
              <Grid item xs={12} sm={6} md={4}>
                <CardView
                  titleId={1}
                  imageUrl={
                    process.env.REACT_APP_DEEZER_IMAGE_URL_PREFIX +
                    //@ts-ignore
                    title['md5_image'] +
                    process.env.REACT_APP_DEEZER_IMAGE_URL_SUFFIX
                  }
                  //@ts-ignore
                  titleText={title['title']}
                  //@ts-ignore
                  detailTextLine1={`By ${title['artist']['name']}`}
                  //@ts-ignore
                  detailTextLine2={`${title['duration']} minutes`}
                />
              </Grid>
            ))}
        </Grid>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isErrorSnackbarOpen}
        autoHideDuration={10000}
        onClose={() => setIsErrorSnackbarOpen(false)}
      >
        <Alert onClose={() => setIsErrorSnackbarOpen(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
