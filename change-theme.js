document.getElementById("submit").addEventListener("click", changeTheme1);

var selection = document.getElementById("theme").value;

function changeTheme1() {
    if (selection = "forest") {
        document.body.style.background = "url(images/forest.jpg)";
        document.body.style.color = "#001413";
    } 
}