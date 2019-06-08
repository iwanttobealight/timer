import { h, render, Component } from "preact";
import { Clock } from "./src/clock/Clock";

export class App extends Component {
  render() {
    return <Clock />;
  }
}
