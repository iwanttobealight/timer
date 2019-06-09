import { h, Component } from "preact";
import { getRemainingTime } from "../helpers/getRemainingTime";
import { getSeconds } from "../helpers/getSeconds";
import { getMinutes } from "../helpers/getMinutes";
import { getHours } from "../helpers/getHours";
import { getDays } from "../helpers/getDays";
import { EVENT_DAY } from "../helpers/eventDay";

import "./Clock.css";
export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      days: "",
      hours: "",
      min: "",
      sec: ""
    };
  }

  componentDidMount() {
    this.getTime();

    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    const { days, hours, min, sec } = getRemainingTime(EVENT_DAY);
    this.setState({ days, hours, min, sec });
  }

  render() {
    const { days, hours, min, sec } = this.state;

    return (
      <p class="clock">
        {`${getDays(days)} ${getHours(hours)} ${getMinutes(min)} ${getSeconds(
          sec
        )}`}
      </p>
    );
  }
}
