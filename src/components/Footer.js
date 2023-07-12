import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div class="flex items-center justify-center bg-stone-900 text-stone-500 h-fit">
        <div className="grid grid-flow-row m-3 text-center">
          <p>dsvill06@unc.edu</p>
          <p>©Copyright 2023 David Villavicencio</p>
        </div>
      </div>
    );
  }
}
