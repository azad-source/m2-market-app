import dayjs, { QUnitType } from "dayjs";
import localEn from "dayjs/locale/en";

export const FORMAT_1M = "HH:mm";
export const FORMAT_5M = "HH";
export const FORMAT_15M = "HH";
export const FORMAT_30M = "ddd DD";
export const FORMAT_1H = "ddd DD";
export const FORMAT_4H = "MMM DD";
export const FORMAT_1D = "MMM";
export const FORMAT_1W = "MMM";

export function formatDate(date: string | Date, format = FORMAT_1M): string {
  return dayjs(date).locale(localEn).format(format);
}

export function getTimeDifference(
  dateFrom: string,
  dateTo: string,
  unit: QUnitType
) {
  return dayjs(dateTo).diff(dateFrom, unit);
}
