import { h, Component } from "preact";
import { getRemainingTime } from "../helpers/getRemainingTime";
import { getSeconds } from "../helpers/getSeconds";
import { getMinutes } from "../helpers/getMinutes";
import { getHours } from "../helpers/getHours";
import { getDays } from "../helpers/getDays";

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
    const { days, hours, min, sec } = getRemainingTime("2019-08-01");
    this.setState({ days, hours, min, sec });
  }

  render() {
    const { days, hours, min, sec } = this.state;

    return (
      <p>
        {`${getDays(days)} ${getHours(hours)} ${getMinutes(min)} ${getSeconds(
          sec
        )}`}
      </p>
    );
  }
}
