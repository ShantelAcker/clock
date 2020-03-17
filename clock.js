//creating variable to change the html content
var displayDate = document.getElementById("date");
var displayTime = document.getElementById("time");

//getting and displaying the current date
var d = new Date(); //make the date variable accessible everywhere

function showDate()
{
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
function showTime() 
{
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
    if (minutes < 10)
    {
        minutes = '0' + minutes;
    }
    if (seconds < 10)
    {
        minutes = '0' + minutes;
    }

    var currentTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    displayTime.innerHTML = currentTime;
}

showTime();

//making the time update constantly


//allowing the user to choose a background color or image

