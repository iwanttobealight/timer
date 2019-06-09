import { declinatWord } from "./declinatWord";

export const getDays = num => `${num} ${declinatWord(num, "д|ень|ня|ней")}`;
