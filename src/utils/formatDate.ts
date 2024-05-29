import dayjs, { QUnitType } from "dayjs";
import localEn from "dayjs/locale/en";

export const DEFAULT_DATE_FORMAT = "DD.MM.YY, HH:mm";

export function formatDate(
  date: string | Date,
  format = DEFAULT_DATE_FORMAT
): string {
  return dayjs(date).locale(localEn).format(format);
}

export function getTimeDifference(
  dateFrom: string,
  dateTo: string,
  unit: QUnitType
) {
  return dayjs(dateTo).diff(dateFrom, unit);
}
