 let btnStar =document.getElementById("btnStar");
 let btnResult = document.getElementById("btnResult");


// ប្រអប់ថ្ងែ
const picker = document.getElementById("days");
for (let day = -1; day <= 33; day++) {
  const div = document.createElement("div");
  div.className = "item";
  div.innerText = day;
  picker.appendChild(div);
}
const items = document.querySelectorAll(".item");
let result =0
function updateActive() {
let center = picker.scrollTop;
let c = center/50+1
result = Math.floor(c);
}
picker.addEventListener("scroll", updateActive);

// ប្រអប់ខែ
const month = document.getElementById("month");
for(let monthNumber=-1;monthNumber<=14;monthNumber++){
  const divMonth =document.createElement("div");
  divMonth.className="itemMonth";
  divMonth.innerText=monthNumber;
  month.appendChild(divMonth)
}
const itemsMonth=document.querySelectorAll(".itemMonth");
let numberX2=0
function update(){
let centerMonth= month.scrollTop;
let numberX=centerMonth/50+1.1
 numberX2= Math.floor(numberX)


}
month.addEventListener("scroll", update);

// ប្រអប់ឆ្នាំ
const year = document.getElementById("year");

for(let numberYear=1898;numberYear<=2026;numberYear++){
  const divYear=document.createElement("div");
  divYear.className="itemYear"
  divYear.innerText=numberYear
year.appendChild(divYear)
}
const itemsYear = document.querySelectorAll("divYear");
let numberY = 0;
function upYear(){
  let centerYear=year.scrollTop;
   let mumberY2=Math.floor(centerYear/50)
     numberY =mumberY2+1900

}
year.addEventListener("scroll", upYear);

//ប្រអប់ចុច
btnStar.addEventListener("click", () => {

  const today = new Date();

  let realMonth = numberX2 ; // 🔥 fix ខែក្នុង UI

  let ye = today.getFullYear() - numberY;
  let mo = (today.getMonth()  ) - realMonth;
  let da = today.getDate() - result;

  // 👉 កែថ្ងៃ
// mo= Math.abs(mo);
//    if (mo <=0) {



//   mo-=mo;
//  }


//    if (mo < 0) {
// ye--;

//  }




  //  if (da < 0) {
  //   mo--;
  //  }
  //   let lastMonth = new Date(
  //     today.getFullYear(),
  //     today.getMonth(),
  //     0
  //   ).getDate();

    // da += mo;
   

  // // 👉 កែខែ
  // if (mo < 0) {
  //   ye--;
  //   mo += 12;


  btnResult.innerText = `${ye} ឆ្នាំ, ${mo} ខែ, ${da} ថ្ងៃ`;

  // Debug
  // console.log("Year:", numberY);
  // console.log("Month:", realMonth);
  // console.log("Day:", result);
  console.log(`Input: ${result}/${realMonth}/${numberY}`);
});















