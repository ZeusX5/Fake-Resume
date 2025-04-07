const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
document.getElementById("date").innerHTML = `${month}/${day}/${year}`;

console.log(`Today is ${date}`);
