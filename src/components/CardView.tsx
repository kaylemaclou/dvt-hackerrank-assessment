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
  uniqueKey: string;
  imageUrl: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
}

export default function CardView({
  uniqueKey,
  imageUrl,
  title,
  subtitle1,
  subtitle2
}: propTypes) {
  const classes = useStyles();

  return (
    <Card key={uniqueKey} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="p"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {subtitle1}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            style={{ fontFamily: 'calibri', fontWeight: 'bold' }}
          >
            {subtitle2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
