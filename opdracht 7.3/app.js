let clicker = document.getElementById("clicker");

    let out = 0;



    function addScore() {

        out++

        clicker.innerText = out;

        if (out > 8)

        out = -1;

}