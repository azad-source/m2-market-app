import dayjs from "dayjs";

export const DEFAULT_FORMAT = "HH:mm";

export function formatDate(
  date: string | Date,
  format = DEFAULT_FORMAT
): string {
  return dayjs(date).format(format);
}
