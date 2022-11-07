import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import {GlobalStyles, lightTheme, darkTheme} from "./styledComponents/Theme"

export const App = () => {

  const [theme, setTheme] = useState('light');

  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  }

  return (
    <ThemeProvider theme={theme === 'light' ?lightTheme :darkTheme}>
      <GlobalStyles/>
      <Navbar themeToggler={themeToggler} theme={theme}/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </ThemeProvider>
  )
}
