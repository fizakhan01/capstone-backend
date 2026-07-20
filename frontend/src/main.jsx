import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MoodProvider } from './Context/MoodContext.jsx'
import {  FavoriteProvider } from './Context/FavoriteContext.jsx'
// import {ThemeProvider} from './Context/ThemeContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from "./Context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <FavoriteProvider>
      <MoodProvider>
        <App />
      </MoodProvider>
    </FavoriteProvider>
  </ThemeProvider>

);
