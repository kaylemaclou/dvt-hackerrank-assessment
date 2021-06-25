import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
  }
});

export default function CardView(props: any) {
  const [isErrorInFetch, setIsErrorInFetch] = useState(false);
  const [localTime, setLocalTime] = useState('...');

  const classes = useStyles();

  async function fetchData() {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/${props.timezone}`
    );
    res
      .json()
      .then((res) => {})
      .catch((err) => setIsErrorInFetch(err));
  }

  // useEffect(() => {
  //   fetchData();
  //   setInterval(fetchData, 10000);
  // }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.companyName}
          height="140"
          image={'./images/companies/' + props.isoCountryCode + '.png'}
          title={props.companyName}
        />
        <CardContent>
          <Typography gutterBottom variant="overline" component="h2">
            {props.companyName}
          </Typography>
          <Typography
            gutterBottom
            variant="button"
            component="h2"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {localTime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
