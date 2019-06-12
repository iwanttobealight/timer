import { h } from "preact";

import "./Clock.css";

export const View = ({ days, hours, min, sec }) => (
  <p class="clock">{`${days} ${hours} ${min} ${sec}`}</p>
);
