import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
  const [deezerApiFetchError, setDeezerApiFetchError] = useState<string>('');
  const [titles, setTitles] = useState<Array<Object>>([]);

  async function findTitlesMatchingSearchString(searchString: string) {
    try {
      if (!searchString.trim()) return;
      const titlesFound: Array<Object> =
        await DeezerApiHttpClient.searchForTitles(searchString);
      console.log(titlesFound);
      //@ts-ignore
      setTitles(titlesFound['data']);
    } catch (error) {
      setDeezerApiFetchError(
        `An error occured whilst searching for titles. ${error.message}`
      );
      alert(deezerApiFetchError);
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
        {titles.map((title) => (
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
  );
}
