import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  ListSubheader,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleDarkMode } from '../../features/theme/themeSlice';
import { NavigationItem } from '../../types/components';

interface INavbar {
  navItems: NavigationItem[];
}

const Navbar = ({ navItems }: INavbar) => {
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const themeSwitch = (
    <>
      <Typography>Toggle dark/light mode</Typography>
      <Switch
        color="default"
        onChange={() => {
          dispatch(toggleDarkMode());
        }}
      />
    </>
  );
  return (
    <AppBar position="static" color="default" style={{ marginBottom: '24px' }}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen((prev) => !prev)}
          >
            <List
              style={{ width: '250px' }}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Navigation Menu
                </ListSubheader>
              }
            >
              <Divider />
              {navItems &&
                navItems.map((navItem) => {
                  return (
                    <ListItem button key={navItem.name}>
                      <ListItemText primary={navItem.name} />
                    </ListItem>
                  );
                })}
              <Divider />
              <ListItem>
                <ListItemText primary="Toggle dark/light mode" />
                <ListItemSecondaryAction>
                  <Switch
                    color="default"
                    edge="end"
                    onChange={() => {
                      dispatch(toggleDarkMode());
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
        <Hidden only={['xs', 'sm']}>
          <Grid container justify="center" spacing={2}>
            {navItems &&
              navItems.map((navItem) => {
                return (
                  <Grid item key={navItem.name}>
                    <Button color="default">{navItem.name}</Button>
                  </Grid>
                );
              })}
          </Grid>
          {themeSwitch}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
