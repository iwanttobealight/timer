import { h, Component } from "preact";
import { getRemainingTime } from "../helpers/getRemainingTime";

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
    setInterval(() => {
      const { days, hours, min, sec } = getRemainingTime("2019-08-01");
      this.setState({ days, hours, min, sec });
    }, 1000);
  }

  render() {
    const { days, hours, min, sec } = this.state;
    return (
      <div>{`${days} дней ${hours} часов ${min} минут ${sec} секунд`}</div>
    );
  }
}
