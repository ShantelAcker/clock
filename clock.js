//creating variable to change the html content
var displayDate = document.getElementById("date");
var displayTime = document.getElementById("time");

//getting and displaying the current date

var m = setInterval(showDate, 5000);
function showDate()
{
    var d = new Date();
    function fullMonth(d)
    {
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        return month[d.getMonth()];
    }

    var currentDay = d.getDate();
    var currentYear = d.getFullYear();

    var fullDateString = fullMonth(d) + ' ' + currentDay + ', ' + currentYear;
    displayDate.innerHTML = fullDateString;
}
showDate();

//getting and displaying the current time
var myVar = setInterval(showTime, 1000);


var t = setInterval(showTime, 1000);
function showTime() 
{
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var meridian = "am";
    var noon = 12;

    //changing from AM to PM
    if (hours >= noon)
    {
        meridian = "pm";
    }

    //avoiding displaying military time for this project
    if (hours > noon)
    {
        hours = hours - 12;
    }

    //avoiding single digits in the time
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    fullTimeString = hours + ":" + minutes + ":" + seconds + " " + meridian;
    time.innerHTML = fullTimeString;
}

function updateTime(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

//allowing the user to choose a background color or image

