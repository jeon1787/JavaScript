var now = new Date();
var firstDay = new Date("2018-03-23");
var toNow = now.getTime();
var toFirst = firstDay.getTime(); // 처음 만난 날
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(24*60*60*1000));

calcDate(100); // 100일 기념일
calcDate(200); // 200일 기념일
calcDate(365); // 1년 기념일
calcDate(500); // 500일 기념일

function calcDate(days) {
	var future = toFirst + days*(1000*60*60*24); // 처음 만난 날 + 기념일
	var someday = new Date(future);
	var year = someday.getFullYear( );
	var month = someday.getMonth( ) + 1;
	var date = someday.getDate( );
	document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일";
}