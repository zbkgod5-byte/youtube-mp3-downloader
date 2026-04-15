let time01 = document.getElementById("time01");

function upt(){
fetch("https://time.now/developer/api/ip")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let time24 = data.datetime;
    let time24_1 = time24.slice(-21, -13);
    console.log(time24_1);

    time01.innerText = time24_1;

    //     setTimeout(()=>{
    //         location.reload();
    //     },1000);
  });
}
setInterval(upt, 100);
