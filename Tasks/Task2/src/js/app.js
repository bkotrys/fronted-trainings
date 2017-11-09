var moment = require('moment');

var date1 = moment("2010-01-01", "YYYY-MM-DD");
var date2 = moment("2017-12-31", "YYYY-MM-DD");

checkNextDay();

function checkNextDay() {
	if (isFriday()) {
		if (date1 < date2) {
			isCorrectDayOfMonth();
		} else {
			return 0;
		}
	} else {
		nextDay(date1);
	}
}

function isCorrectDayOfMonth() {
	const currentDate = date1.date();
	const correctDays = [5, 10, 20];

	if (correctDays.indexOf(currentDate) !== -1) {
		console.log(`Date ${date1.format('YYYY-MM-DD')} is a ${date1.day()}'th day of the week.`);
	}

	nextDay(date1);
}

function nextDay() {
	date.add(1, 'days');
	checkNextDay();
}

function isFriday() {
	return date1.day() === 5;
}