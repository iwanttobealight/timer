import dayjs from "dayjs";
import {
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  HOURS_IN_DAY
} from "./config";

export const getRemainingTime = finishDate => {
  const today = dayjs(new Date());
  const finishDay = dayjs(finishDate);

  const differencre = finishDay.diff(today);
  const days =
    differencre /
    MILLISECONDS_IN_SECOND /
    SECONDS_IN_MINUTE /
    MINUTES_IN_HOUR /
    HOURS_IN_DAY;
  const displayDays = Math.floor(days);
  const hours =
    differencre / MILLISECONDS_IN_SECOND / SECONDS_IN_MINUTE / MINUTES_IN_HOUR -
    displayDays * HOURS_IN_DAY;
  const displayHours = Math.floor(hours);
  const minutes = (hours - displayHours) * MINUTES_IN_HOUR;
  const displayMinutes = Math.floor(minutes);
  const seconds = (minutes - displayMinutes) * SECONDS_IN_MINUTE;
  const displaySeconds = Math.floor(seconds);

  return {
    days: displayDays,
    hours: displayHours,
    min: displayMinutes,
    sec: displaySeconds
  };
};
