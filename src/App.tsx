import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import {MainRouter} from './components/MainRouter/MainRouter'
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtdibWcl2SCwAdoiYZg5btsIPbfbIahrw",
  authDomain: "raf-website-742bb.firebaseapp.com",
  projectId: "raf-website-742bb",
  storageBucket: "raf-website-742bb.appspot.com",
  messagingSenderId: "709425852660",
  appId: "1:709425852660:web:9dc8153728e2fa350f6ea1",
  measurementId: "G-1M1CM124EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



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
