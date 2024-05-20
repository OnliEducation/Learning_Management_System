import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css'
import { Homepage } from '../pages/Homepage';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Homepage />
      
    </BrowserRouter>
  </React.StrictMode>
)
