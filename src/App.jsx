import React from 'react'
import { AboutMe } from './components/AboutMe'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

export const App = () => {
  return (
    <>
      <Home/>
      <AboutMe/>
      <Projects/>
    </>
  )
}
