import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUnixTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  const options = {
    weekday: "long", // Full day of the week (e.g., Thursday)
    year: "numeric", // Full year (e.g., 2025)
    month: "long", // Full month name (e.g., January)
    day: "numeric", // Day of the month (e.g., 30)
    hour: "numeric", // Hour in 12-hour format
    minute: "2-digit", // Minutes (zero-padded)
    second: "2-digit", // Seconds (zero-padded)
    timeZone: "UTC", // Specify UTC timezone
    timeZoneName: "short", // Display UTC in the format
  } as const;

  return date.toLocaleString("en-US", options); // Formats the date as per the options
}

export function extractTime(dateString: string): string | null {
  const timePattern = /\b\d{1,2}:\d{2}:\d{2} [APM]{2}\b/;
  const match = dateString.match(timePattern);
  return match ? match[0] : null;
}

export function extractDay(dateString: string): string | null {
  const dayPattern =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/;
  const match = dateString.match(dayPattern);
  return match ? match[0] : null;
}

export function removeSecondsFromFormattedTime(timeString: string): string {
  const [time, period] = timeString.split(" ");
  const [hours, minutes] = time.split(":");

  // Convert hours to 12-hour format
  const hoursInt = parseInt(hours, 10);
  const isPM = period === "PM";

  const formattedHours = hoursInt.toString();
  const formattedMinutes = minutes;

  return `${formattedHours}:${formattedMinutes} ${isPM ? "PM" : "AM"}`;
}

export function getWeatherIcon(icon: string): string {
  const iconType = icon.substring(0, 2);
  if (iconType === "01" || iconType === "02" || iconType === "10") {
    return `/weather-icons/${icon}.png`;
  } else {
    return `/weather-icons/${iconType}d.png`;
  }
}
