import { h, Component } from "preact";
import dayjs from "dayjs";

export const Clock = () => {
  const today = dayjs(new Date());
  const finishDay = dayjs("2019-08-01");
  // new
  const differencre = finishDay.diff(today);
  const days = differencre / 1000 / 60 / 60 / 24;
  const displayDays = Math.floor(days);
  const hours = differencre / 1000 / 60 / 60 - displayDays * 24;
  const displayHours = Math.floor(hours);
  const minutes = hours * 60 - displayHours * 60;
  const displayMinutes = Math.floor(minutes);
  const seconds = (minutes - displayMinutes) * 60;
  const displaySeconds = Math.floor(seconds);

  return (
    <div>{`${displayDays} дней ${displayHours} часов ${displayMinutes} минут ${displaySeconds} секунд`}</div>
  );
};
