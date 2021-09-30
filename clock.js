// accessing html elements
const displayTime = document.getElementById("time");
const displayDate = document.getElementById("date");

// getting and displaying the current date

const day = setInterval(showDate, 5000);
function showDate() {
    let d = new Date();
    function fullMonth(d)
    {
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        return month[d.getMonth()];
    }

    let currentDay = d.getDate();
    let currentYear = d.getFullYear();

    let fullDateString = fullMonth(d) + ' ' + currentDay + ', ' + currentYear;
    displayDate.innerHTML = fullDateString;
}
// have to call showDate once or the date won't show at first
showDate();

// getting and displaying the current time
const time = setInterval(showTime, 1000);
function showTime()  {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let meridian = "am";
    let noon = 12;

    //changing from AM to PM
    if (hours >= noon) {
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
    displayTime.innerHTML = fullTimeString;
}

function updateTime(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

