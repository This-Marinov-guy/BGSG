export const convertDate = (date) => {
  //only for such format "2001-03-11";

  const dateParts = date.split("-").map(Number);
  const newDate = new Date(dateParts[0], dateParts[2] - 1, dateParts[1]);

  const longDateFormat = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return longDateFormat.format(newDate);
};
