import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter hashType= "hashbang">
        <App />
      </HashRouter>
  </React.StrictMode>
)
