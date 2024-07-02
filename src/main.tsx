import React from 'react'
import ReactDOM from 'react-dom/client'
import "./1_app/styles/index.css"
import './1_app/firebase/firebase';
import { App } from './1_app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)