import React, { Component } from "react";

const languages = { Javascript: 0.6, Java: 0.3, Python: 0.3, Sql: 0.25 };
const frameworks = {
  "React.js": 0.75,
  "Node.js": 0.6,
  "Express.js": 0.5,
  MongoDB: 0.25,
};

const Bar = ({ percent }) => {
  const barStyle = {
    width: `${percent * 100}%`,
  };

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 w-">
      <div
        className="bg-orange-600 text-center p-1 rounded-full"
        style={barStyle}
      ></div>
    </div>
  );
};

export class About extends Component {
  render() {
    return (
      <section id="About" className="p-4 bg-neutral-800">
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-9 w-screen-lg m-auto p-9 h-[50%]">
          <div class="flex justify-center items-center">
            <img
              class="w-80 rounded-full shadow-md border-orange-600 border-4"
              alt="David Villavicencio"
              src="https://media.licdn.com/dms/image/D4E03AQGDILULa67LNg/profile-displayphoto-shrink_800_800/0/1682282309829?e=2147483647&v=beta&t=m9q1ZCw4aVLd2ErhnUpRezloaceO5iBUDKIw3Z1lvrM"
            />
          </div>
          <div class="flex col-span-1 flex-col gap-5 text-left">
            <h1 class="text-4xl text-white text-center">About Me</h1>
            <hr />
            <p class="text text-lg">
              Hi there! My name is David Villavicencio, and I am currently
              pursuing a degree in Computer Science at the University of North
              Carolina at Chapel Hill. Alongside my studies, I am also
              passionate about Entrepreneurship and Engineering, which I am
              minoring in. Originally from Ecuador, I also take great pride in my
              Colombian heritage on my Mom's side.
            </p>
            <h2 className="text-3xl text-white text-center">Skills</h2>
            <hr />
            <div className="grid grid-cols-2 gap-x-10 text-white text-xl">
              <ul className="text">
                <li className="text-xl pb-3 text-center">
                  <h3 style={{ wordBreak: "break-all" }}>
                    Frameworks/Software
                  </h3>
                </li>
                {Object.entries(frameworks).map(([framework, percent]) => (
                  <li key={framework}>
                    {framework}
                    <Bar percent={percent} />
                  </li>
                ))}
              </ul>
              <ul className="text">
                <li class="text-xl pb-3 text-center">
                  <h3>Languages</h3>
                </li>
                {Object.entries(languages).map(([language, percent]) => (
                  <li key={language}>
                    {language}
                    <Bar class="" percent={percent} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
