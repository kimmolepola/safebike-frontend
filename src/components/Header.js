import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Avatar, Button, Grid, Hidden, IconButton, Link, Tab, Tabs, Toolbar, Tooltip, Typography,
} from '@material-ui/core';
import { Help as HelpIcon, Menu as MenuIcon, Notifications as NotificationsIcon } from '@material-ui/icons';
import Theme from '../Theme';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const useStyles = makeStyles({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -Theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: Theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

const Header = ({
  drawerOpen, setDrawerOpen, tab, setTab,
}) => {
  const classes = useStyles();

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <IconButton
                id="drawerOpenButton"
                style={{ display: drawerOpen ? 'none' : '' }}
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Bike parking areas
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={tab} textColor="inherit">
          <Tab id="mapTab" onClick={() => setTab(0)} textColor="inherit" label="Map" />
          <Tab id="pointTab" onClick={() => setTab(1)} textColor="inherit" label="Point" />
        </Tabs>
      </AppBar>
    </>
  );
};

export default Header;
