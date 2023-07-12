import React, { Component } from 'react'
import {Hero} from "../components/Hero.js"
import {About} from "../components/About.js"
import Resume from '../components/Resume.js'
import Projects from '../components/Projects.js'
import Contact from '../components/Contact'

export class Home extends Component {
  render() {
    return (
      <>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>
      </>
    )
  }
}
