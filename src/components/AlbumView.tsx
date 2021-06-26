import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../model/Title';
import { Grid, Typography } from '@material-ui/core';
import { title } from 'process';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: 'yellow'
  },
  gridContainer: {
    padding: '0rem'
  }
}));

interface propTypes {
  isOpen: boolean;
  title: Title;
  closeHandler: () => void;
}

export default function AlbumView({ isOpen, title, closeHandler }: propTypes) {
  const classes = useStyles();
  return (
    <Dialog
      open={isOpen}
      onClose={closeHandler}
      aria-labelledby="form-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="form-dialog-title">Album Info</DialogTitle>
      <DialogContent>
        <DialogContentText>OUT OF TIME .... SORRY!</DialogContentText>

        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justify="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            style={{ width: 100, height: 100, backgroundColor: 'blue`' }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            style={{ width: 100, height: 100, backgroundColor: 'red`' }}
          ></Grid>
        </Grid>

        <DialogActions>
          <Button onClick={closeHandler} color="primary">
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
