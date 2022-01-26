var main = document.querySelector(".main");
var btnInput = document.createElement("input");
btnInput.setAttribute("type", "text");
btnInput.setAttribute("class", "input");
btnInput.setAttribute("id", "result");
main.appendChild(btnInput);

// var buttons = [1, 2, 3, "+", "-", 6, 5, 4, "/", 9, 8, 7, "*", ".", "Back", "reset"];

var btnOne = document.createElement("button");
btnOne.setAttribute("id", 1);
btnOne.innerText = "1";
var btnTwo = document.createElement("button");
btnTwo.setAttribute("id", 2);
btnTwo.innerText = "2";
var btnThree = document.createElement("button");
btnThree.setAttribute("id", 3);
btnThree.innerText = "3";
var btnFour = document.createElement("button");
btnFour.setAttribute("id", 4);
btnFour.innerText = "4";
var btnFive = document.createElement("button");
btnFive.setAttribute("id", 5);
btnFive.innerText = "5";
var btnSix = document.createElement("button");
btnSix.setAttribute("id", 6);
btnSix.innerText = "6";
var btnSeven = document.createElement("button");
btnSeven.setAttribute("id", 7);
btnSeven.innerText = "7";
var btnEight = document.createElement("button");
btnEight.setAttribute("id", 8);
btnEight.innerText = "8";
var btnNine = document.createElement("button");
btnNine.setAttribute("id", 9);
btnNine.innerText = "9";
var btnZero = document.createElement("button");
btnZero.setAttribute("id", 0);
btnZero.innerText = "0";
var btnDot = document.createElement("button");
btnDot.innerText = ".";
var btnAdd = document.createElement("button");
btnAdd.innerText = "+";
btnAdd.setAttribute("id", "add");
var btnSub = document.createElement("button");
btnSub.setAttribute("id", "subtract")
btnSub.innerText = "-";
var btnMul = document.createElement("button");
btnMul.innerText = "X";
var btnDiv = document.createElement("button");
btnDiv.innerText = "/";
var btnMod = document.createElement("button");
btnMod.innerText = "%";
var btnClear = document.createElement("button");
btnClear.setAttribute("id", "clear");
btnClear.innerText = "C";
var btnBack = document.createElement("button");
btnBack.innerText = "Back";
var btnEquals = document.createElement("button");
btnEquals.setAttribute("id", "equal");
btnEquals.innerText = "=";
btnEquals.setAttribute("class", "equals");
var btnHistory = document.createElement("button");
btnHistory.innerText = "M";

main.append(btnClear, btnBack, btnHistory, btnClear, btnDiv, btnNine, btnEight, btnSeven, btnSub, btnSix, btnFive, btnFour, btnAdd, btnThree, btnTwo, btnOne, btnMul, btnEquals, btnZero, btnDot, btnMod);

// for (var btns of buttons) {
//     var btn = document.createElement("button");
//     btn.innerText = btns;
//     main.appendChild(btn);
// }


btnOne.addEventListener("click", (val) => {
    // btnInput.value += 1;
    // console.log(val);
    // evaluate(1);
    displayValuesInScreen("1");
});
btnTwo.addEventListener("click", (val) => {

    displayValuesInScreen("2");
});
btnThree.addEventListener("click", (val) => {
    // btnInput.value += 3;
    // console.log(btnInput);
    displayValuesInScreen("3")
});
btnFour.addEventListener("click", (val) => {
    // btnInput.value += 4;
    // console.log(btnInput);
    displayValuesInScreen("4");
});
btnFive.addEventListener("click", (val) => {
    // btnInput.value += 5;
    // console.log(btnInput);
    displayValuesInScreen("5");
});
btnSix.addEventListener("click", (val) => {
    // btnInput.value += 6;
    // console.log(btnInput);
    displayValuesInScreen("6");
});
btnSeven.addEventListener("click", (val) => {
    // btnInput.value += 7;
    // console.log(btnInput);
    displayValuesInScreen("7");
});
btnEight.addEventListener("click", (val) => {
    // btnInput.value += 8;
    // console.log(btnInput);
    displayValuesInScreen("8");
});
btnNine.addEventListener("click", (val) => {
    // btnInput.value += 9;
    // console.log(btnInput);
    displayValuesInScreen("9");
});
btnDot.addEventListener("click", (val) => {
    // btnInput.value += ".";
    // console.log(btnInput);
    displayValuesInScreen(".");
});
btnClear.addEventListener("click", (val) => {
    // btnInput.value = " ";
    // console.log(btnInput);
    clearScreen();
});
btnAdd.addEventListener("click", (val) => {
    // btnInput.value += "+"
    // console.log(btnInput);
    displayValuesInScreen("+");
});
btnSub.addEventListener("click", (val) => {
    // btnInput.value += "-";
    // console.log(btnInput);
    displayValuesInScreen("-")
});
btnMul.addEventListener("click", (val) => {
    // btnInput.value += "*"
    // console.log(btnInput);
    displayValuesInScreen("*");
});
btnDiv.addEventListener("click", (val) => {
    // btnInput.value += "/";
    // console.log(btnInput);
    displayValuesInScreen("/");
});
btnMod.addEventListener("click", (val) => {
    // btnInput.value += "%";
    // console.log(btnInput);
    displayValuesInScreen("%");
});
btnHistory.addEventListener("click", (val) => {
    // btnInput.value += 00;
    // console.log(btnInput);
    // zeroDisplay("00");
    historyShow();

});
btnZero.addEventListener("click", (val) => {
    // btnInput.value += 0;
    displayValuesInScreen("0")
});

btnBack.addEventListener("click", (val) => {
    delNumbers();
});

btnEquals.addEventListener("click", (val) => {
    calculateResult();
});

function displayValuesInScreen(val) {
    btnInput.value += val;
}

function clearScreen() {
    btnInput.value = " ";
    btnInput.focus();
}

function zeroDisplay(val) {
    btnInput.value = val;
    setTimeout(function() {
        clearScreen();
    }, 1000);
}


function calculateResult() {
    try {
        btnInput.value = eval(btnInput.value);
        localStorage.setItem("Result", btnInput.value);
    } catch (error) {
        setTimeout(function() {
            btnInput.value = "Enter Correct Values";
            btnInput.style.color = "red";
        }, 0);
        setTimeout(function() {
            clearScreen();
            btnInput.style.color = "black";
        }, 1500);
    }
    btnInput.value("Error!...");
}


function delNumbers() {
    btnInput.value = btnInput.value.slice(0, -1);
}

// btnOne.addEventListener("click", (val) {
//     document.querySelector(".input").innerHTML = "ss";
// });

var his;

function historyShow() {
    his = localStorage.getItem("Result");
    btnInput.value += his;


}