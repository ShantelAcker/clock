var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var hours = d.getHours();
  var t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = t;
  
}