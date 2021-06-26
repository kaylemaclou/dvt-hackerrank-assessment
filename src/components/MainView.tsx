import React, { useState } from 'react';
import { Grid, LinearProgress, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import DeezerApiHttpClient from '../services/DeezerApiHttpClient';
import FindTitlesView from './FindTitlesView';
import CardView from './CardView';
import Title from '../model/Title';
import AlbumView from './AlbumView';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundImage: 'linear-gradient(90deg, #0033A1, #00A1E0);',
    textAlign: 'center',
    color: 'yellow'
  },
  gridContainer: {
    padding: '2rem'
  }
}));

export default function MainView() {
  const classes = useStyles();
  const [titles, setTitles] = useState<Array<Title>>([]);
  const [selectedTitle, setSelectedTitle] = useState<Title>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] =
    useState<boolean>(false);
  const [isAlbumViewOpen, setIsAlbumViewOpen] = useState<boolean>(false);

  async function findTitlesMatchingSearchString(searchString: string) {
    try {
      if (!searchString.trim()) return;
      setIsLoading(true);
      const titlesFound: Array<Title> =
        await DeezerApiHttpClient.searchForTitles(searchString);
      setIsLoading(false);
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
        setTitles(titlesFound);
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
      {isLoading && <LinearProgress />}
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
                  key={title.uniqueKey as string}
                  uniqueKey={title.uniqueKey as string}
                  imageUrl={title.imageUrl}
                  title={title.description as string}
                  subtitle1={`by ${title.artistName}`}
                  subtitle2={title.formatedDuration as string}
                  onClickHandler={() => {
                    setSelectedTitle(title);
                    setIsAlbumViewOpen(true);
                  }}
                />
              </Grid>
            ))}
        </Grid>
      </div>

      <AlbumView
        isOpen={isAlbumViewOpen}
        title={selectedTitle as Title}
        closeHandler={() => setIsAlbumViewOpen(false)}
      />

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
