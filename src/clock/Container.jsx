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
      sec: "",
      timerId: null
    };
  }

  componentDidMount() {
    this.getTime();

    const timerId = setInterval(() => {
      this.getTime();
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    const { timerId } = this.state;

    clearInterval(timerId);
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
