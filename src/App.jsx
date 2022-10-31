import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

export const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </>
  )
}
