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
import { Link } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleDarkMode } from '../../features/theme/themeSlice';
import { NavigationItem } from '../../types/components';

interface INavbar {
  navItems: NavigationItem[];
  themeType: 'light' | 'dark';
}

const Navbar = ({ navItems, themeType = 'dark' }: INavbar) => {
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const oppositeTheme = themeType === 'dark' ? 'light' : 'dark';
  const themeSwitch = (
    <>
      <Typography>Toggle {oppositeTheme} mode</Typography>
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
                    <Link to={navItem.name} smooth offset={-10} duration={500}>
                      <ListItem button key={navItem.name}>
                        <ListItemText primary={navItem.name} />
                      </ListItem>
                    </Link>
                  );
                })}
              <Divider />
              <ListItem>
                <ListItemText primary={`Toggle ${oppositeTheme} mode`} />
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
                    <Link to={navItem.name} smooth offset={-10} duration={500}>
                      <Button color="default">{navItem.name}</Button>
                    </Link>
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
