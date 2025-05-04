import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { domAnimation, LazyMotion } from 'framer-motion';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { tmdbApi } from "./services/TMDB.js";
import GlobalContextProvider from './context/globalContext.jsx';
import ThemeProvider from './context/themeContext.jsx';
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
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
      </ClerkProvider>
  </StrictMode>,
)
