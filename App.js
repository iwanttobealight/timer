import { h, render, Component } from "preact";
import Clock from "./src/clock";
import "normalize.css";
import images from "./src/images";
import fs from "fs";

import "./App.css";

const background = fs.readFileSync(__dirname + "/src/images/background.png");

export class App extends Component {
  render() {
    return (
      <div className="container">
        <img
          class="background"
          src={`data:image/png;base64,${background.toString("base64")}`}
        />
        <Clock />
      </div>
    );
  }
}
