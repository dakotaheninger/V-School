var finalDate = document.getElementById("date");
var finalTime = document.getElementById("time");
var fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var today = new Date();

var addingZero = function(num) {
  if(num < 10) {
    num = "0" + num;
  }
  return num;
}
var time = today.toLocaleTimeString();

var day = fullDays[today.getDay()];

var date = today.getDate();

if(date == 1){
  date = date + "st";
} else if(date == 2){
  date = date + "nd";
} else if(date == 3){
  date = date + "rd";
} else {
  date = date + "th";
}

var month = fullMonths[today.getMonth()];

var year = today.getFullYear();

var dateSentance = "Today is: " + day + " the " + date + " of " + month + " of the year " + year;

var timeSentance = "The current time is: " + time;


finalDate.innerHTML = dateSentance;
finalTime.innerHTML = timeSentance;
