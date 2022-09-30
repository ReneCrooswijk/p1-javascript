let h1 = document.getElementById("h1");
let button = document.getElementById("button")
let button2 = document.getElementById("button2")

let count = 0;


function counter(){
    count += 1;
    h1.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "blue";
    button.style.backgroundColor = "red"
    button2.style.backgroundColor = "red"
}

function counter2(){
    count -= 1;
    h1.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "red";
    button2.style.backgroundColor = "blue"
    button.style.backgroundColor = "blue"
}