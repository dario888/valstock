import { MONTHS } from "./contants";

export const createAtDate = () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  return `${date}th ${MONTHS[month]} ${year}`;
};
