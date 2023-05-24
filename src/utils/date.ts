import dayjs from "dayjs";

const formateDate = (date: Date) => dayjs(date).format("YYYY-MM-DD");

const formatHour = (date: Date) => dayjs(date).format("HH:mm");

const updateDate = (current: Date, select: string): Date => {
  const original = dayjs(current);
  const update = dayjs(select);
  const newDate = original
    .set("day", update.get("day"))
    .set("month", update.get("month"))
    .set("year", update.get("year"));
  return newDate.toDate();
};

const updateHour = (current: Date, select: string): Date => {
  const original = dayjs(current);
  const [hour, minute] = select.split(":");
  const newDate = original
    .set("hour", parseInt(hour))
    .set("minute", parseInt(minute));
  return newDate.toDate();
};

export { formateDate, formatHour, updateDate, updateHour };
