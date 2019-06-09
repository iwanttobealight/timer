import { declinatWord } from "./declinatWord";

export const getHours = num => `${num} ${declinatWord(num, "ча|с|са|сов")}`;
