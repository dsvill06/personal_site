import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-stone-800" style={{backgroundImage: `url("https://reactresume.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-background.371f2b47.webp&w=3840&q=75")`}}>
        <div className="flex flex-col align-middle text-center justify-center pt-40 z-10 text-white">
          <div className="">
            <h1 className="text-8xl">404 Not Found</h1>
            <a href="/">
              <h2 className="text-4xl hover:text-blue-300">Go Back Home</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
