import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import { cyan, teal } from '@material-ui/core/colors';
import './App.scss';
import { RootState } from './app/store';
import Navbar from './components/Navbar/Navbar';
import { NavigationItem } from './types/components';
import Home from './features/home/Home';

function App() {
  const darkMode = useSelector<RootState>(
    (state) => state.theme.darkMode
  ) as NavigationItem[];

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: cyan,
      secondary: teal,
    },
  });

  useFirestoreConnect([{ collection: 'headerItems' }]);

  const navItems = useSelector<RootState>(
    (state) => state.firestore?.ordered?.headerItems
  ) as NavigationItem[];

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar navItems={navItems} />
        <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
