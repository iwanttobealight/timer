import { h, Component } from "preact";
import { getRemainingTime } from "../helpers/getRemainingTime";
import { getDays } from "../helpers/getDays";
import { EVENT_DAY } from "../helpers/eventDay";
import { View } from "./View";

export class Container extends Component {
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

    return <View days={getDays(days)} hours={hours} min={min} sec={sec} />;
  }
}
