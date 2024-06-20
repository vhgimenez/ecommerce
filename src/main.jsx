import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
import { Home } from './Home/Home'
import { Collections } from './Collections/Collections.jsx';
import GlobalStyle from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
