const currentUTCTime = document.getElementById('currentUTCTime');
const currentDay = document.getElementById('currentDay');

// GET CURRENT UTC TIME
const utcTimeMilliseconds = new Date().getTime();
currentUTCTime.innerText = utcTimeMilliseconds;

// GET CURRENT DAY OF THE WEEK
const today = new Date();
const dayOfWeek = today.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
currentDay.innerText = daysOfWeek[dayOfWeek];