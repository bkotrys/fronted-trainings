var date = new Date();
var christmasDate = new Date(2017,11,24,12,0,0);
var timeToChristmas = Math.abs(date - christmasDate);
var timeToChristmasInDays = Math.ceil(timeToChristmas / (1000 * 3600 * 24));

console.log(`\nCurrent date: ${date}`);
console.log(`\nChristmas date: ${christmasDate}`);
console.log(`\nDays to Christmas: ${timeToChristmasInDays}`);