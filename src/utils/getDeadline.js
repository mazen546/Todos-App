export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}-${month}-${day}`;
};
const getDayName = (dateString) => {
  const date = new Date(dateString);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};
function getDaysDifference(dateString1, dateString2) {
  let date1 = new Date(dateString1);
  let date2 = new Date(dateString2);
  // Calculate the difference between the dates in milliseconds
  let diff = date2 - date1;
  // Return the difference in days as an integer
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export const getDeadLineColor = (end) => {
  const start = getCurrentDate();
  const difference = getDaysDifference(start, end);
  if (difference < 1) {
    return "#b65052";
  } else if (difference < 3) {
    return "#e09e51";
  } else {
    return "#3eb66f";
  }
};

export const getDeadLine = (end) => {
  const start = getCurrentDate();
  const difference = getDaysDifference(start, end);
  if (difference < 0) {
    return `${-1 * difference} days ago`;
  } else if (difference === 0) {
    return "Today";
  } else if (difference < 7) {
    const dayName = getDayName(end);
    return dayName;
  } else {
    return `${difference} days`;
  }
};
