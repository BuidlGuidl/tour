import { Event, ISODate } from "../events";

// Parse dates with specified time to prevent timezone-related date shifts
const getEventDates = ({ dateStart, dateEnd }: { dateStart: ISODate; dateEnd?: ISODate }) => {
  const startDate = new Date(dateStart + "T12:00:00");
  const endDate = dateEnd ? new Date(dateEnd + "T12:00:00") : startDate;
  return { startDate, endDate };
};

// Helper function to get month name using JavaScript's built-in Intl API
const getMonthName = (date: Date): string => {
  return date.toLocaleDateString("en-US", { month: "long" });
};

export const formatEventDate = (dateStart: ISODate, dateEnd?: ISODate): string => {
  const { startDate, endDate } = getEventDates({ dateStart, dateEnd });

  // Single day event
  if (startDate === endDate) {
    return `${getMonthName(startDate)} ${startDate.getDate()}`;
  }

  // Multi-day event
  return startDate.getMonth() === endDate.getMonth()
    ? // Same month
      `${getMonthName(startDate)} ${startDate.getDate()} - ${endDate.getDate()}`
    : // Different months
      `${getMonthName(startDate)} ${startDate.getDate()} - ${getMonthName(endDate)} ${endDate.getDate()}`;
};

// Get the start date of the event for sorting
export const getEventSortDate = (event: Event): Date => {
  const { startDate } = getEventDates({ dateStart: event.dateStart });
  return startDate;
};

// Determine if the event should be displayed
export const shouldDisplayEvent = (event: Event): boolean => {
  const { startDate, endDate } = getEventDates({ dateStart: event.dateStart, dateEnd: event.dateEnd });

  // Don't display events where end date is before start date
  if (endDate < startDate) {
    return false;
  }

  const CUTOFF_DAYS = 2;
  const cutoffDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - CUTOFF_DAYS);

  // Event should be displayed if its end date is after the cutoff
  return endDate >= cutoffDate;
};
