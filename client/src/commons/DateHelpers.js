export const getFormatedDate = (rawDate) =>
   new Date(rawDate).toISOString().split("T")[0];
