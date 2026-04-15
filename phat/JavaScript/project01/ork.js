const name0= document.getElementById("name")
const age0= document.getElementById("age")
const Majore0= document.getElementById("major")
const Score0= document.getElementById("score")

const name1= document.getElementById("name1")
const age1= document.getElementById("age1")
const major1= document.getElementById("major1")
const Score1= document.getElementById("Score1")

const btn =document.querySelector('.btn-save')

let o=[]
btn.addEventListener("click",()=>{

name1.innerText=name0.value;
age1.innerText=age0.value;
major1.innerText=Majore0.value;
Score1.innerText=Score0.value;
});
