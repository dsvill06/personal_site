import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div class="flex items-center justify-center bg-stone-800 h-20 text-stone-500">
        <div className="grid grid-flow-col">
          <p>dsvill06@unc.edu | </p>
          <FontAwesomeIcon className="p-1" icon={faCopyright} />
          <p>Copyright 2023 David Villavicencio | +1 (984) 989-3713</p>
        </div>
      </div>
    );
  }
}
