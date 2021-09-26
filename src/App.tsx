import React from 'react';
import outfitLogo from './assets/images/2raflogo.png'
import './App.css';
import { LinkBox } from './components/LinkBox/LinkBox'
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { colors, Link } from '@material-ui/core/';
import {LinkFooter} from './components/LinkFooter/LinkFooter'

function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: colors.red,
      secondary: colors.yellow
    }
  });

  return (
      <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <header className="App-header">
          <img src={outfitLogo} alt="logo" />
          <LinkFooter/>
        </header>
      </div>
      </ThemeProvider>
  );
}

export default App;
