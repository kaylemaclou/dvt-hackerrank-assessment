import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';

import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundImage: 'linear-gradient(90deg, #0033A1, #00A1E0);',
    marginBottom: 4,
    color: 'yellow'
  },
  title: {
    flexGrow: 1,
    paddingLeft: '2em'
  },
  imageIcon: {
    height: '100%',
    width: '100%'
  },
  iconRoot: {
    textAlign: 'center',
    width: '1.5em',
    height: '1.5em'
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: 'whitesmoke'
  },
  drawerPaper: {
    backgroundImage:
      'linear-gradient(to bottom, #0033a1, #0037ad, #003bb9, #0140c6, #0244d2);',
    width: drawerWidth,
    color: 'whitesmoke'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    color: 'whitesmoke',
    letterSpacing: 3
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  icon: {
    color: 'whitesmoke'
  },
  link: {
    textDecoration: 'none',
    color: 'whitesmoke' //theme.palette.text.primary
  }
}));

export default function DeezerAppBar(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            background: 'transparent',
            color: 'yellow'
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Icon classes={{ root: classes.iconRoot }}></Icon>
            <Typography className={classes.title}>
              <img
                className={classes.imageIcon}
                style={{ width: '10rem' }}
                src="./images/deezer.png"
              />
            </Typography>
            <>
              <IconButton
                aria-label="2 consesus requests awaiting approval"
                color="inherit"
              >
                <Badge badgeContent={2} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton edge="end" aria-haspopup="true" color="inherit">
                <AccountCircle />
              </IconButton>
            </>
          </Toolbar>
        </AppBar>
      </div>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Icon classes={{ root: classes.iconRoot }}></Icon>

          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ paddingRight: '3rem', color: 'yellow' }}
          >
            |||||||| Menu
          </Typography>

          <IconButton
            style={{ paddingRight: '3rem', color: 'yellow' }}
            onClick={handleDrawerClose}
          >
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Notifications" color="white">
            <ListItemIcon className={classes.icon}>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <Link to="/" className={classes.link}>
            <ListItem button key="search">
              <ListItemIcon className={classes.icon}>
                <CardGiftcardIcon />
              </ListItemIcon>
              <ListItemText primary="Searc" />
            </ListItem>
          </Link>
          <Link to="/artists" className={classes.link}>
            <ListItem button key="artists">
              <ListItemIcon className={classes.icon}>
                <ThumbUpIcon />
              </ListItemIcon>
              <ListItemText primary="Artists" />
            </ListItem>
          </Link>
          <Link to="/albums" className={classes.link}>
            <ListItem button key="albums">
              <ListItemIcon className={classes.icon}>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Albums" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}
