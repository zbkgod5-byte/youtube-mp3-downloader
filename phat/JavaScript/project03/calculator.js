const screen = document.querySelector('.calculator-screen');
const equal = document.querySelector('.equal-sign');
const point = document.getElementById("point");
const de= document.getElementById("delate");
const number7 = document.getElementById("b7");
const number8 = document.getElementById("b8");
const number9 = document.getElementById("b9");
const number4 = document.getElementById("b4");
const number5 = document.getElementById("b5");
const number6 = document.getElementById("b6");
const number1 = document.getElementById("b1");
const number2 = document.getElementById("b2");
const number3 = document.getElementById("b3");
const operator1 = document.querySelector('.operator1');
const operator2 = document.querySelector('.operator2');
const operator3 = document.querySelector('.operator3');
const operator4= document.querySelector('.operator4');
point.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = ".";
            } else {
                screen.value += ".";}
});
operator1.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "÷";
            } else {
                screen.value += "÷";}
});
operator2.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "";
            } else {
                screen.value += "x";}
});
operator3.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "-";
            } else {
                screen.value += "-";}
});
operator4.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "+";
            } else {
                screen.value += "+";}
});
number7.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "7";
            } else {
                screen.value += "7";}
});
number8.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "8";
            } else {
                screen.value += "8";}
});
number9.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "9";
            } else {
                screen.value += "9";}
});
number4.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "4";
            } else {
                screen.value += "4";}
});
number5.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "5";
            } else {
                screen.value += "5";}
});
number6.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "6";
            } else {
                screen.value += "6";}
});
number1.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "1";
            } else {
                screen.value += "1";}
});
number2.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "2";
            } else {
                screen.value += "2";}
});
number3.addEventListener("click",()=>{
if (screen.value === "0") {
                screen.value = "3";
            } else {
                screen.value += "3";}
});
de.addEventListener("click",()=>{
    screen.value = screen.value.slice(0, -1);
    if (screen.value === "") {
        screen.value = "0";}
});
equal.addEventListener("click", () => {
        // ប្តូរ ÷ ទៅជា / និង x ទៅជា * ដើម្បីឱ្យកុំព្យូទ័រគណនាបាន
        let equation = screen.value.replace(/÷/g, '/').replace(/x/g, '*');
        let result = eval(equation);
        screen.value = result
    } 
);