// Converts "Jun 2025" -> "June 2025"
// Converts "2024-06-15" -> "June 15, 2024"

export function formatDate(dateString) {
  if (!dateString) return "";

  // If input is like "Jun 2025"
  if (dateString.length <= 8) {
    const [month, year] = dateString.split(" ");
    const months = {
      Jan: "January",
      Feb: "February",
      Mar: "March",
      Apr: "April",
      May: "May",
      Jun: "June",
      Jul: "July",
      Aug: "August",
      Sep: "September",
      Oct: "October",
      Nov: "November",
      Dec: "December",
    };
    return `${months[month] || month} ${year}`;
  }

  // If input is full date "YYYY-MM-DD"
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
