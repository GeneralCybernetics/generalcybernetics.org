import logo from './assets/logo.PNG';
import { Typography, Box, Button, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArtryrLsWoR-1D7B-cEGUXzk_Miyl9j78",
  authDomain: "generalcybernetics-215ab.firebaseapp.com",
  projectId: "generalcybernetics-215ab",
  storageBucket: "generalcybernetics-215ab.appspot.com",
  messagingSenderId: "275289523744",
  appId: "1:275289523744:web:a708ade5bdb88f944f1e45",
  measurementId: "G-0GGV8N4RDP"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Set your primary color here
    },
    secondary: {
      main: '#000', // Set your secondary color here
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button variant="outlined" color="primary" size="small" href="mailto:aydin@generalcybernetics.org" sx={{ margin: '5px' }}>
              Get in touch
            </Button>
          </Box>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
