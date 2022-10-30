import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App'
import {ThemeProvider} from "styled-components"
import {Theme} from "./styledComponents/Theme"
import { HashRouter as Router} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)
