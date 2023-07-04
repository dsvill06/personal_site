import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div class="">
        <div class="grid grid-flow-col gap-16 bg-neutral-800 w-screen p-28">
            <div class="grid col-span-1 justify-center items-center">
                <img class="relative w-56 rounded-3xl shadow-md " alt="David Villavicencio" src="https://media.licdn.com/dms/image/D4E03AQGDILULa67LNg/profile-displayphoto-shrink_800_800/0/1682282309829?e=2147483647&v=beta&t=m9q1ZCw4aVLd2ErhnUpRezloaceO5iBUDKIw3Z1lvrM"/>
            </div>
            <div class="flex col-span-1 flex-col gap-5">
                <h1 class="text-4xl text-white">About Me</h1>
                <body class="text-stone-300 text-lg ">
                    My name is David Villavicencio, I am a student at the University of North Carolina at Chapel Hill studying
                    Computer Science with minors in Entrepreneurship and Engineering. I am a proud Ecuadorian with Colombian heritage on my Mom's side.
                    Recently I have been using technologies such as React.js, Node.js, Express.js, MongoDB, and Heroku
                </body>
            </div>
        </div>
      </div>
    )
  }
}
