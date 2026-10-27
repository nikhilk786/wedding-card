import { WeddingConfig } from "@/config/wedding";

export function getGoogleCalendarUrl(config: WeddingConfig): string {
  const startDate = new Date(config.wedding.isoDateTime);
  // Default to 4 hour duration
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const formatIso = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const title = encodeURIComponent(
    `Wedding Ceremony: ${config.bride.firstName} & ${config.groom.firstName}`
  );
  const details = encodeURIComponent(
    `${config.wedding.tagline}\n\nVenue: ${config.venue.name}\n${config.venue.fullAddress}\n\n${config.wedding.auspiciousMuhurat}`
  );
  const location = encodeURIComponent(`${config.venue.name}, ${config.venue.fullAddress}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatIso(startDate)}/${formatIso(endDate)}&details=${details}&location=${location}`;
}

export function downloadIcsFile(config: WeddingConfig): void {
  const startDate = new Date(config.wedding.isoDateTime);
  const endDate = new Date(startDate.getTime() + 5 * 60 * 60 * 1000);

  const formatIcsDate = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Royal Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@royalwedding.invitation`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:Wedding: ${config.bride.fullName} & ${config.groom.fullName}`,
    `DESCRIPTION:${config.wedding.tagline} - ${config.wedding.auspiciousMuhurat}`,
    `LOCATION:${config.venue.name}, ${config.venue.city}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `${config.bride.firstName}_${config.groom.firstName}_Wedding.ics`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

