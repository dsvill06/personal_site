import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section
        id="Resume"
        className="w-screen h-auto flex flex-col items-center md:p-16"
        style={{ background: "#052630" }}
      >
        <div className="mt-20 text-center ">
          <h3 className="text-orange-500 text-3xl">Resume</h3>
          <h1 className="text-white text-5xl">More About my Credentials</h1>
        </div>
        <div className="w-full text-center">
          <h2 className="text-4xl text-orange-500 mt-20 mb-5">
            Work Experience
          </h2>
          <hr className="w-1/2 mx-auto mb-10" />
        </div>
        <table className="grid w-full mx-4 sm:mx-20 md:mb-8">
          <tbody className="align-middle p-2">
            <tr className="grid grid-cols-2 gap-10 w-full text-center">
              <td className="flex flex-col text border-r-2 justify-center">
                <h1 className="text-3xl">
                  Software Engineer Intern
                  <h2 className="text-xl">June 2023-Present</h2>
                </h1>
              </td>
              <td className="text-left">
                <h1 className="text-2xl pl-2 text-orange-500 pb-2">HomeCook</h1>
                <hr className="w-3/4" />
                <p className="text-sm md:text-xl sm:text-base text-left text leading-relaxed m-1 py-2">
                  Worked as Front-End Intern, where I actively contributed my expertise in
                  technologies such as React.js and TailwindCSS to drive the
                  development of an innovative app for the dynamic startup,
                  HomeCook.
                </p>
              </td>
            </tr>
            <tr className="grid grid-cols-2 gap-10 w-full text-center">
              <td className="flex flex-col text border-r-2 justify-center">
                <h1 className="text-3xl">
                  Remote Extern<h2 className="text-xl">May 2023-July 2023</h2>
                </h1>
              </td>
              <td className="text-left">
                <h1 className="text-2xl pl-2 text-orange-500 pb-2">PwC</h1>
                <hr className="w-3/4" />
                <p className="text-sm md:text-xl sm:text-base text-left text leading-relaxed m-1 py-2">
                  Worked with PwC under the Paragon One's
                  Consulting Program partnered with CEOARE, I got hands-on exposure to
                  the dynamic world of consulting and allowed me to work closely
                  with industry experts, senior consultants, and talented
                  professionals from PwC.
                </p>
              </td>
            </tr>
            <tr className="grid grid-cols-2 gap-10 w-full text-center">
              <td className="flex flex-col text border-r-2 justify-center">
                <h1 className="text-3xl">
                  Intern
                  <h2 className="text-xl">May 2023-June 2023</h2>
                </h1>
              </td>
              <td className="text-centers sm:text-left">
                <h1
                  className="text-2xl text-left text-orange-500 pl-2 pb-2"
                  style={{ wordBreak: "break-all" }}
                >
                  FarCloser Travel
                </h1>
                <hr className="w-3/4" />
                <p className="text-sm md:text-xl sm:text-base text-left text leading-relaxed m-1 py-2">
                  Worked on a significant HubSpot
                  project involving the transfer, merging, and editing of over
                  1000 company records. In this project, I utilized my expertise
                  in data management and cleaning techniques to ensure the
                  security and accuracy of the data within the required time
                  frame.
                </p>
              </td>
            </tr>
            <tr className="grid grid-cols-2 gap-10 w-full text-center">
              <td className="flex flex-col text border-r-2 justify-center">
                <h1 className="text-3xl">
                  Product Service Intern
                  <h2 className="text-xl">January 2022-August 2022</h2>
                </h1>
              </td>
              <td className="text-centers">
                <h1 className="text-2xl text-left text-orange-500 pl-2 pb-2">SignalX</h1>
                <hr className="w-3/4" />
                <p className="text-sm md:text-xl sm:text-base text-left text leading-relaxed m-1 py-2">
                  Actively
                  contributed to an entrepreneurial venture specializing in the
                  development of websites and mobile applications. Working
                  closely with a team of talented developers and designers, I
                  gained valuable insights into the functionality of such a
                  venture. Throughout my internship, I focused on enhancing my
                  communication and product management skills. 
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full text-center">
          <h2 className="text-4xl text-orange-500 mt-20 mb-5">
            Education
          </h2>
          <hr className="w-1/2 mx-auto mb-10" />
        </div>
        <table className="grid w-full mx-4 sm:mx-20 mb-20">
          <tbody className="align-middle p-2">
            <tr className="grid grid-cols-2 gap-10 w-full text-center">
              <td className="flex flex-col text border-r-2 justify-center pr-2">
                <h1 className="text-3xl">
                  Bachelor Degree in Computer Science 
                <h2 className="text-xl">Applied Science and Engineering Minor | Entrepreneurship Minor</h2>
                <h2 className="text-xl">August 2022-Present</h2>
                </h1>
              </td>
              <td className="text-left">
                <h1 className="text-2xl pl-2 text-orange-500 pb-2" style={{ wordBreak: "break-all" }}>University of North Carolina at Chapel Hill</h1>
                <hr className="w-3/4" />
                <p className="text-sm md:text-xl sm:text-base text-left text leading-relaxed m-1 py-2">
                    Founding member and Incubator Chair of TechX, a computer science society based on delevoping students to be better developers.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}
