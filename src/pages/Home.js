import React, { Component } from 'react'
import {Hero} from "../components/Hero.js"
import {About} from "../components/About.js"
import Resume from '../components/Resume.js'
import Projects from '../components/Project.js'

export class Home extends Component {
  render() {
    return (
      <>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      </>
    )
  }
}
