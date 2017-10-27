var moment = require('moment');

var date1 = moment("2010-01-01", "YYYY-MM-DD");
var date2 = moment("2017-12-31", "YYYY-MM-DD");

isFriday();

function isFriday() {
	if (date1.day() === 5) {
		if (date1 < date2) {
			isCorrectDayOfMonth();
		} else {
			return 0;
		}
	} else {
		date1.add(1, 'days');
		isFriday();
	}
}

function isCorrectDayOfMonth() {
	if (date1.date() === 5 || date1.date() === 10 || date1.date() ===20) {
		console.log(`Date ${date1.format('YYYY-MM-DD')} is a ${date1.day()}'th day of the week.`);
		date1.add(1, 'days');
		isFriday();
	} else {
		date1.add(1, 'days');
		isFriday();
	}
}
