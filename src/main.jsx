import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import ThemeProvider from './context/themeContext.jsx';

import { tmdbApi } from "./services/TMDB.js";

import './index.css'
import App from './App.jsx'
import GlobalContextProvider from './context/globalContext.jsx';
import { domAnimation, LazyMotion } from 'framer-motion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider api={tmdbApi}>
        <ThemeProvider>
          <GlobalContextProvider>
            <LazyMotion features={domAnimation}>
              <App />
            </LazyMotion>
          </GlobalContextProvider>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>,
)
