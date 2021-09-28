import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core/';
import {MainRouter} from './components/MainRouter/MainRouter'
import { BrowserRouter } from 'react-router-dom';
function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: {
                light: '#c3333d',
                main: '#b5000d',
                dark: '#7e0009'
              },
      secondary: {
                  main: '#ffc107',
                },
    }
  });

  return (
      <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <BrowserRouter>
          <MainRouter/>
        </BrowserRouter>
      </div>
      </ThemeProvider>
  );
}

export default App;
