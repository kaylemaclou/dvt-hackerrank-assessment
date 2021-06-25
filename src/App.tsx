import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { deezerAppTheme } from './theme/deezer-app-theme';
import DeezerAppBar from './components/DeezerAppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainView from './components/MainView';
//import ArtistView from './components/ArtistView';

function App() {
  return (
    <ThemeProvider theme={deezerAppTheme}>
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <Router>
          <Route path="/">
            <DeezerAppBar />
          </Route>
          <Switch>
            <Route path="/" exact>
              <MainView />
            </Route>
            <Route path="/artist">{/*<ArtistView />*/}</Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
