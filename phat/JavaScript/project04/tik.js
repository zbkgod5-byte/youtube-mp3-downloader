
let m =0;
function cellClicked(index) {
    const cells = document.querySelectorAll('.cell');
m++;



console.log(m);
    if ((m%2)==0){
    cells[index].classList.add('yellow');
}else{
    cells[index].classList.add('red');
}
checkWin();
};
function checkWin() {
    const cells = document.querySelectorAll('.cell');
    
    // បង្កើតបញ្ជីនៃជួរដេកដែលត្រូវឈ្នះ (Winning Combinations)
    const winningRows = [
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], // ជួរដេក
        [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], // ជួរឈរ
        [3,6,9,12],[0,5,10,15]
    ];

    for (let combo of winningRows) {
        const [a, b, c, d] = combo;
        
        // ទាញយក Class ពណ៌នៃប្រអប់នីមួយៗ (ឧទាហរណ៍៖ class="cell red")
        const colorA = cells[a].classList[1];
        const colorB = cells[b].classList[1];
        const colorC = cells[c].classList[1];
        const colorD = cells[d].classList[1];

        // លក្ខខណ្ឌ៖ បើទាំង ៤ មានពណ៌ដូចគ្នា ហើយមិនមែនជាប្រអប់ទទេ
        if (colorA && colorA === colorB && colorA === colorC && colorA === colorD) {
            setTimeout(() => {
                alert("អបអរសាទរ! ជួរដែលមានពណ៌ " + colorA + " បានឈ្នះហើយ!");
            }, 100);
            return true; // ឈប់ឆែកទៀតព្រោះឈ្នះហើយ
        }
    }
}












// t1.addEventListener("click",()=>{
// t1.classList.add('yellow'); 
// });
// t2.addEventListener("click",()=>{
// t2.classList.add('yellow'); 
// });
// t3.addEventListener("click",()=>{
// t3.classList.add('yellow'); 
// });
// t4.addEventListener("click",()=>{
// t4.classList.add('yellow'); 
// });
// t5.addEventListener("click",()=>{
// t5.classList.add('yellow'); 
// });
// t6.addEventListener("click",()=>{
// t6.classList.add('yellow'); 
// });
// t7.addEventListener("click",()=>{
// t7.classList.add('yellow'); 
// });
// t8.addEventListener("click",()=>{
// t8.classList.add('yellow'); 
// });
// t9.addEventListener("click",()=>{
// t9.classList.add('yellow'); 
// });
