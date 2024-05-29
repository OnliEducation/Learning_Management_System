import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
// import { Homepage } from '../pages/Homepage';
import { Login } from '../pages/Login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Homepage />       */}
      <Login />
    </BrowserRouter>
  </React.StrictMode>
)