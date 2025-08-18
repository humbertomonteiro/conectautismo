export const hasCountdownEnded = (dateEvent) => {
  const eventDate = new Date(dateEvent);
  const currentDate = new Date();
  return currentDate >= eventDate;
};
