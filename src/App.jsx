import React from 'react'
import { AboutMe } from './components/AboutMe'
import { Cv } from './components/Cv'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

export const App = () => {
  return (
    <>
      <Navbar/>
      <AboutMe/>
      <Cv/>
      <Projects/>
    </>
  )
}
