import { declinatWord } from "./declinatWord";

export const getSeconds = num => `${num} ${declinatWord(num, "секун|да|ды|д")}`;
