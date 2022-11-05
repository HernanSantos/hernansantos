import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { GlobalStyles } from './styledComponents/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </>
  )
}
