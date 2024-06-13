import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import GlobalStyle from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
