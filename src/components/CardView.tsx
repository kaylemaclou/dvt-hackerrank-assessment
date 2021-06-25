import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '0 auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    },
    fontFamily: 'calibri'
  }
});

interface propTypes {
  titleId: number;
  imageUrl: string;
  titleText: string;
  detailTextLine1: string;
  detailTextLine2: string;
}

export default function CardView({
  titleId,
  imageUrl,
  titleText,
  detailTextLine1,
  detailTextLine2
}: propTypes) {
  const classes = useStyles();

  return (
    <Card key={titleId} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={titleText}
          height="140"
          image={imageUrl}
          title={titleText}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="p"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {titleText}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {detailTextLine1}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {detailTextLine2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
