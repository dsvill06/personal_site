import React, { Component } from 'react'
import {Card} from "./Card.js"
import {projects} from "../utils/enum"

const projectsArray = projects()

export default class Projects extends Component {
  render() {
    return (
      <section id="Projects" class="w-screen h-full md:mb-16  bg-black">
        <div className="text-center mb-10 pt-20">
          <h3 className="text-orange-500 text-3xl pb-1">Projects</h3>
          <h1 className="text-white text-5xl ">See What I'm Working On</h1>
        </div>
        <div className='flex justify-center'>
          <hr className='w-11/12'/>
        </div>
        <div className='flex flex-col md:flex-row m-10 justify-center align-middle items-center gap-12 md:gap-20 md:py-16'>
          {projectsArray.map((project) => {
            return <Card key={project.name} {...project}/>
          })}
        </div>
      </section>
    )
  }
}
