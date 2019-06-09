import { declinatWord } from "./declinatWord";

export const getMinutes = num => `${num} ${declinatWord(num, "мину|та|ты|т")}`;
