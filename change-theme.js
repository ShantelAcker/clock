document.getElementById("submit").addEventListener("click", changeTheme);

var selection = document.getElementById("theme").value;

function changeTheme() {
    if (selection = "forest") {
        document.body.style.background = "url(images/forest.jpg)";
        document.body.style.color = "#001413";
    } else if (selection = "original") {
        document.body.style.background = "#03031a";
        document.body.style.color = "#708090";
    }
}