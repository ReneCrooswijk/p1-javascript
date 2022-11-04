let output = document.getElementById("out")

function PlusCalculate() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x + y
}

function MinusCalculate() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x - y
}

function MultiplyCalculate() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x * y;
}

function DivideCalculate() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x / y
}