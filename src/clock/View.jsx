import { h } from "preact";

import "./Clock.css";
import { addZero } from "../helpers/addZero";

export const View = ({ days, hours, min, sec }) => (
  <article class="clock">
    <p>{days}</p>
    <p>{`${addZero(hours)}:${addZero(min)}:${addZero(sec)}`}</p>
  </article>
);
