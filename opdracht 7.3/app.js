let clicker = document.getElementById("clicker")

let count = 0;

function addscore() {
    count++
    clicker.Innertext = count;
    if (count> 9) {
        count = 0
    }
}