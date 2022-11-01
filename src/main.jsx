import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App'
import {ThemeProvider} from "styled-components"
import {Theme} from "./styledComponents/Theme"
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <HashRouter hashType= "hashbang">
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
)
