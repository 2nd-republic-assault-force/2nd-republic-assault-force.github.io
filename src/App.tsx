import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { MainRouter } from "./components/MainRouter/MainRouter";
import { BrowserRouter } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/Firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_APPID,
      measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
      const defaultTheme = createTheme({
            palette: {
                  primary: {
                        light: "#c3333d",
                        main: "#b5000d",
                        dark: "#7e0009",
                  },
                  secondary: {
                        main: "#ffc107",
                        dark: "#282c34",
                  },
            },
      });

      return (
            <FirebaseContext.Provider value={new Firebase()}>
                  <ThemeProvider theme={defaultTheme}>
                        <div className="App">
                              <BrowserRouter>
                                    <MainRouter />
                              </BrowserRouter>
                        </div>
                  </ThemeProvider>
            </FirebaseContext.Provider>
      );
}

export default App;
