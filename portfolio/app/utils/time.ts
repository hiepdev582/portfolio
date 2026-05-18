export type TimeType = Date | string | number;

export interface TimeDuration {
  years: number;
  months: number;
  days: number;
}

/**
 * Parses a TimeType value into a JavaScript Date object.
 */
export function parseDate(d: TimeType): Date {
  if (d instanceof Date) return d;
  if (typeof d === "number") return new Date(d);
  if (typeof d === "string") {
    const trimmed = d.trim().toLowerCase();
    if (trimmed === "now") return new Date();

    // Parse DD/MM/YYYY
    const dmyMatch = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(trimmed);
    if (dmyMatch) {
      const day = Number.parseInt(dmyMatch[1] ?? "", 10);
      const month = Number.parseInt(dmyMatch[2] ?? "", 10) - 1;
      const year = Number.parseInt(dmyMatch[3] ?? "", 10);
      return new Date(year, month, day);
    }

    // Parse MM/YYYY
    const myMatch = /^(\d{1,2})\/(\d{4})$/.exec(trimmed);
    if (myMatch) {
      const month = Number.parseInt(myMatch[1] ?? "", 10) - 1;
      const year = Number.parseInt(myMatch[2] ?? "", 10);
      // Default to the 1st of the month
      return new Date(year, month, 1);
    }

    const parsed = new Date(d);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

/**
 * Thuật toán vay mượn thông minh (Borrowing algorithm)
 * Calculates the raw time difference components (years, months, days) between two dates.
 */
export function getTimeDiffComponents(
  start: TimeType,
  end: TimeType = new Date(),
): TimeDuration {
  let startDate = parseDate(start);
  let endDate = parseDate(end);

  // Swap if start date is after end date to keep difference positive
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  // Handle day borrowing
  if (days < 0) {
    months--;
    // Get last day of the previous month relative to endDate
    const prevMonthDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0,
    );
    days += prevMonthDate.getDate();
  }

  // Handle month borrowing
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

/**
 * Calculates the exact duration between two dates/times and returns a formatted string in English.
 * Shows years, months, and days (only displaying non-zero parts).
 */
export function timeDiff(start: TimeType, end: TimeType = new Date()): string {
  const { years, months, days } = getTimeDiffComponents(start, end);

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  if (days > 0) parts.push(`${days} ${days === 1 ? "day" : "days"}`);

  return parts.join(" ") || "0 days";
}

/**
 * Sums up multiple TimeDurations and returns a formatted string in English.
 * Normalizes days (30 days = 1 month) and months (12 months = 1 year).
 */
export function sumTimeDurations(durations: TimeDuration[]): string {
  let totalYears = 0;
  let totalMonths = 0;
  let totalDays = 0;

  for (const d of durations) {
    totalYears += d.years;
    totalMonths += d.months;
    totalDays += d.days;
  }

  // Normalize days (assuming average of 30 days per month)
  if (totalDays >= 30) {
    totalMonths += Math.floor(totalDays / 30);
    totalDays = totalDays % 30;
  }

  // Normalize months
  if (totalMonths >= 12) {
    totalYears += Math.floor(totalMonths / 12);
    totalMonths = totalMonths % 12;
  }

  const parts: string[] = [];
  if (totalYears > 0)
    parts.push(`${totalYears} ${totalYears === 1 ? "year" : "years"}`);
  if (totalMonths > 0)
    parts.push(`${totalMonths} ${totalMonths === 1 ? "month" : "months"}`);
  if (totalDays > 0)
    parts.push(`${totalDays} ${totalDays === 1 ? "day" : "days"}`);

  return parts.join(" ") || "0 days";
}
