import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Authcontextprovider } from './context/Authcontext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authcontextprovider>
        <App />
      </Authcontextprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
