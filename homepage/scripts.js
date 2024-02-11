const form = document.getElementById("form");
const clock = document.getElementById("clock");

const DATE_UNITS = [
  ["year", 31536000],
  ["month", 2592000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const [LAST_UNIT] = DATE_UNITS[DATE_UNITS.length - 1];

const getDateDiffs = (date) => {
  const now = Date.now();
  const elapsed = (date.getTime() - now) / 1000;

  const [unit, secondsInUnit] = DATE_UNITS.find(
    ([unit, secondsInUnit]) =>
      Math.abs(elapsed) > secondsInUnit || unit === LAST_UNIT
  );

  return {
    unit,
    value: Math.round(elapsed / secondsInUnit),
  };
};

const dateToRelativeTime = (date) => {
  const rtf = new Intl.RelativeTimeFormat("en");

  const { value, unit } = getDateDiffs(date);

  return rtf.format(value, unit);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const { value } = form.search;

  if (!value.trim()) return form.setAttribute("aria-invalid", true);

  form.setAttribute("aria-invalid", false);

  window.location = `https://duckduckgo.com/?q=${value}`;
};


const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const updateClock = () => {
  const date = new Date();

  const options = {
    hour: "numeric",
    minute: "2-digit",
  };

  clock.textContent = date.toLocaleTimeString([], options);
  clock.datetime = date.toISOString();
};

updateClock();

setInterval(updateClock, 10000);

form.addEventListener("submit", handleSubmit);