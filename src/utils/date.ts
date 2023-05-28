import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

const formateDate = (date: Date) => dayjs(date).format("YYYY-MM-DD");

const formatHour = (date: Date) => dayjs(date).format("HH:mm");

const updateDate = (select: string): Date => {
  const update = dayjs(select);
  return update.toDate();
};

const updateHour = (current: Date, select: string): Date => {
  const original = dayjs(current);
  const [hour, minute] = select.split(":");
  const newDate = original
    .set("hour", parseInt(hour))
    .set("minute", parseInt(minute));
  return newDate.toDate();
};

const showDate = (date: Date) => dayjs(date).format("dddd D MMMM, YYYY");

const showHour = (date: Date) => dayjs(date).format("h:mm A");

export { formateDate, formatHour, updateDate, updateHour, showDate, showHour };
