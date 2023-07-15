import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import EmailForm from "./molecules/Email";

export default class Contact extends Component {
  render() {
    return (
      <section id="Contact" className="h-fit bg-stone-800 p-10">
        <div className="text-center mb-10">
          <h3 className="text-orange-500 text-3xl pb-1">Contact</h3>
          <h1 className="text-white text-5xl">Connect With Me</h1>
          <h2 className="text-stone-300 text-xl p-1 mt-3">
            I'd Love to expand my network
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full text-center md:my-10">
          <div className="flex flex-col text justify-center md:ml-10">
            <EmailForm/>
          </div>
          <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-y-5 items-center">
            <div class="">
                <h1 className="text-2xl pl-2 text">Lets Connect!</h1>
                <a
                  href="https://www.linkedin.com/in/dsvill06/"
                  target="_blank"
                  rel="noreferrer">
                    <FontAwesomeIcon
                      className="text-6xl hoverButton m-1"
                      icon={faLinkedin}
                    />
                </a>
                  <h1 className="text-2xl pl-2 text-orange-500 pb-2">LinkedIn</h1>
            </div>
            <div class="md:mr-20">
            <h1 className="text-2xl pl-2 text">Add Me</h1>
                <a
                  href="https://www.linkedin.com/in/dsvill06/"
                  target="_blank"
                  rel="noreferrer">
                    <FontAwesomeIcon
                      className="text-6xl hoverButton m-1"
                      icon={faGithub}
                    />
                </a>
                  <h1 className="text-2xl pl-2 text-orange-500 pb-2">Github</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
