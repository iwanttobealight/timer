import { h, render, Component } from "preact";
import Clock from "./src/clock";

import "./App.css";
export class App extends Component {
  render() {
    return <Clock />;
  }
}
