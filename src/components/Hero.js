import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";

export class Hero extends Component {
  render() {
    return (
      <section id="Home">
        <div className="flex flex-row justify-center items-center">
          <div className="relative flex h-screen w-full items-center justify-center">
            <img
              alt=""
              className="absolute z-0 h-full w-full object-cover"
              src="https://reactresume.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-background.371f2b47.webp&w=3840&q=75"
            />
            <div className="z-10 max-w-screen-lg px-4 flex flex-col items-center">
              <div className="flex flex-col items-center gap-y-6 text-center backdrop-blur-sm rounded-xl bg-gray-800/40 shadow-lg bg-opacity-30 p-6">
                <div className="ps-2 text-4xl font-bold tracking-tight text-white sm:text-7xl">
                  <Typewriter
                    options={{
                      strings: ["I'm David Villavicencio."],
                      autoStart: true,
                      loop: true,
                      pauseFor: 10000,
                      delay: 90,
                    }}
                  />
                </div>
                <p className="text-white text-xl">
                  <strong>
                    Fullstack Engineer | Entrepreneur | Leader
                  </strong>
                </p>
                <p className="text-xl leading-8 text-gray-300">
                  I'm a North Carolina based
                  <strong className="text-white">
                    {" "}
                    Full Stack Software Engineer{" "}
                  </strong>
                  currently studying Computer Science at the University of North
                  Carolina at Chapel Hill.
                </p>
                <div className="flex flex-row gap-x-6 justify-center sm:items-stretch sm:justify-center">
                  <div></div>
                  <a
                    href="https://github.com/dsvill06"
                    rel="noreferrer"
                    target="_blank"
                    className="hoverButton"
                  >
                    <FontAwesomeIcon className="text-4xl" icon={faGithub} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dsvill06/"
                    target="_blank"
                    rel="noreferrer"
                    className="hoverButton"
                  >
                    <FontAwesomeIcon className="text-4xl" icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 animate-bounce">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hoverButton text-4xl hover:cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </Link>
            </div>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </section>
    );
  }
}