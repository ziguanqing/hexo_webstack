// 年月日星期
var datetimeEl = document.querySelector("#date");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var weekday = new Array("Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat");
// var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var week = weekday[date.getDay()];
datetimeEl.innerHTML =
    year + " " + month + " " + day + " " + "&nbsp;&nbsp;" + week;

// 时间
var datetimeEl = document.querySelector("#time");
function setCurrentTime() {
    var hours = ("0" + new Date().getHours()).slice(-2);
    var mins = ("0" + new Date().getMinutes()).slice(-2);
    datetimeEl.innerHTML = `${hours}:${mins}`;
}
setCurrentTime();
setInterval(function () {setCurrentTime();}, 5000);
