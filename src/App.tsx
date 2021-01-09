import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { OrderByOptions, useFirestoreConnect } from 'react-redux-firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import { RootState } from './app/store';
import Navbar from './components/navbar/Navbar';
import { NavigationItem } from './types/components';
import Home from './features/home/Home';

function App() {
  const darkMode = useSelector<RootState>(
    (state) => state.theme.darkMode
  ) as NavigationItem[];

  const themeType = darkMode ? 'dark' : 'light';
  const theme = createMuiTheme({
    palette: {
      type: themeType,
      primary: { main: '#455A64' },
      secondary: { main: '#00BCD4' },
    },
  });

  useFirestoreConnect([
    { collection: 'headerItems', orderBy: ['index', 'asc'] as OrderByOptions },
  ]);

  const navItems = useSelector<RootState>(
    (state) => state.firestore?.ordered?.headerItems
  ) as NavigationItem[];

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar navItems={navItems} themeType={themeType} />
        <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
