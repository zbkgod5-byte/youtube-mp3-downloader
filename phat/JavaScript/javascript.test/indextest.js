// const a = document.getElementById("b1");
// const a1 = document.getElementById("b2");
// const a2 = document.getElementById("t1");
// const a3 = document.getElementById("t2");
// const a4 = document.getElementById("t3");
// const a5 = document.getElementById("t4");
// const a6 = document.getElementById("t5");
// const a7 = document.getElementById("t6");
// const a8 = document.getElementById("t7");

// const add = [];
// b1.addEventListener("click", () => {


  
// // const d  = Number(a2.value);
// //   const d1 = Number(a3.value);
// //   const d2 = Number(a4.value);
// //   const d3 = Number(a5.value);
// //   const d4 = Number(a6.value);
// //   const d5 = Number(a7.value);
// //   const d7 = Number(a8.value);
// //   add.push(d, d1, d2, d3, d4, d5, d7);
// //     let y = 0;
// //   for (let i = 0; i < 2; i++) {
// //     y += add[i];
//     b2.innerText = y;
//   }

  
// });

//   function phat (q){
// return q*q;}
// const text1 = document.getElementById("t1");
// const text2 = document.getElementById("t2");
// const button = document.getElementById("b1");
// const te = document.getElementById("tx1");

// button.addEventListener("click",()=>{

// phat_array=[5]
// const  a=phat_array.map(
// phat
// )
// te.innerText=a



// });


// let username = "   dara_dev   ";

// console.log(username.length);        // បង្ហាញ៖ 14 (ព្រោះមាន Space ច្រើន)

// let cleanName = username.trim();

// console.log(cleanName);              // បង្ហាញ៖ "dara_dev" (បាត់ Space អស់ហើយ)
// console.log(cleanName.length);       // បង្ហាញ៖ 8

// យើងបង្កើតថង់មួយឈ្មោះថា 'អាសយដ្ឋាន' ដើម្បីទុក URL
// ប្រើ API URL ដែលគេអនុញ្ញាតឱ្យយើងទាញយក (ឧទាហរណ៍ពី OpenWeather)
// ប្តូរ URL ទៅជាអាសយដ្ឋានរបស់ WeatherAPI វិញ
// const apiURL = "https://timeapi.io/api/v1/time/current/zone?timeZone=Asia/Phnom_Penh";

// fetch(apiURL)
//     .then(ចម្លើយ => {
//         if (!ចម្លើយ.ok) throw new Error("Key ខុស ឬរកមិនឃើញទិន្នន័យ");
//         return ចម្លើយ.json();
//     })
//     .then(ទិន្នន័យ => {
//         // កន្លែងទាញយកទិន្នន័យក៏ខុសគ្នាបន្តិចដែរ (ប្រើ .current.temp_c)
//         console.log("ទិន្នន័យទទួលបានហើយ!", ទិន្នន័យ);
     
//     })
//     .catch(កំហុស => console.log("មានបញ្ហា៖ " + កំហុស));
// ចាប់យកអត្ថបទពី Element ដែលមាន id ឈ្មោះថា clock
// fetch("https://api.open-meteo.com/v1/forecast?latitude=13.10&longitude=103.50&current_weather=true")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
   
//   });

// const ytdl = require('ytdl-core');
// const ffmpeg = require('fluent-ffmpeg');

// const url = 'https://youtu.be/BPpJBKodQDw?si=k_SsX4z76yfnO8MU';

// // ទាញយកសំឡេងផ្ទាល់ពី YouTube
// ffmpeg(ytdl(url, { quality: 'highestaudio' }))
//     .toFormat('mp3')
//     .save('muxsic.mp3')
//     .on('end', () => {
//         console.log('ការបំលែងជោគជ័យ!');
//     });




// const inpu = document.getElementById('myInput');
// let pasteData = ""; // គួរប្រើ string ទទេជាតម្លៃដើម

// inpu.addEventListener('paste', (event) => {
//     // ១. ចាប់យកទិន្នន័យពី Clipboard
//     pasteData = (event.clipboardData || window.clipboardData).getData('text');

//     // ២. បង្ហាញលទ្ធផលភ្លាមៗនៅពេលផាស
//     console.log("ទិន្នន័យដែលបានផាសគឺ: " + pasteData);

//     // ៣. អ្នកអាចហៅ Function ផ្សេងទៀតឱ្យធ្វើការនៅទីនេះ
//     processMyUrl(pasteData); 
// });

// // កុំសរសេរ console.log នៅទីនេះ ព្រោះវានឹងរត់មុនពេលអ្នកផាស
// function processMyUrl(urll) {
//     console.log("កំពុងរៀបចំ URL: " + urll);



// const ytDlp = require('yt-dlp-exec');
// const path = require('path');

// // កំណត់ Link YouTube ឱ្យបានត្រឹមត្រូវ
// const url = 'urll';

// // កំណត់ទីតាំងដែលត្រូវរក្សាទុក (ទុកក្នុង Folder ជាមួយ Code នេះ)
// const outputPath = path.resolve(__dirname, 'myusic.mp3');

// console.log('កំពុងទាញយក និងបំលែង... សូមរង់ចាំ!');

// async function downloadMusic() {
//     try {
//         await ytDlp(url, {
//             extractAudio: true,
//             audioFormat: 'mp3',
//             output: outputPath,
//             // ប្រសិនបើមានបញ្ហា Error ទៀត អាចថែមបន្ទាត់ខាងក្រោម៖
//             // noCheckCertificates: true,
//         });
        
//         console.log('✅ ការបំលែងបានជោគជ័យ!');
//         console.log('📍 ទីតាំង File: ' + outputPath);
//     } catch (error) {
//         console.error('❌ មានកំហុសក្នុងការទាញយក៖', error.message);
//     }
// }

// downloadMusic();
// } 

const inpu = document.getElementById('myInput');

inpu.addEventListener('paste', (event) => {
    // ១. ចាប់យក URL ពី Clipboard នៅពេលគេផាស
    const pasteData = (event.clipboardData || window.clipboardData).getData('text');
    console.log("តំណភ្ជាប់ដែលបានផាសគឺ: " + pasteData);

    // ២. ហៅ Function ដើម្បីផ្ញើទៅ Server បំលែងជា MP3
    processMyUrl(pasteData);
});

function processMyUrl(youtubeUrl) {
    console.log("កំពុងផ្ញើទៅកាន់ Server ដើម្បីបំលែង...");

    // ប្រើ fetch ដើម្បីបញ្ជូន URL ទៅកាន់ Node.js Server
    fetch('http://localhost:3000/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: youtubeUrl })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("✅ Server បំលែងចប់ហើយ! កំពុងចាប់ផ្ដើមទាញយកមកម៉ាស៊ីន...");
            
            // ៣. បង្កើត Link សម្រាប់ទាញយក File ពី Server មកកាន់ Device របស់យើង
            // យើងប្រើឈ្មោះ File (fileName) ដែល Server បានផ្ញើមកឱ្យ
            const downloadUrl = `http://localhost:3000/get-file?name=${data.fileName}`;
            
            // ប្រើ window.location.href ដើម្បីឱ្យ Browser ចាប់ផ្ដើម Download ស្វ័យប្រវត្តិ
            window.location.href = downloadUrl;

            alert("✅ ការបំលែងជោគជ័យ! File កំពុងត្រូវបានទាញយកមកកាន់ម៉ាស៊ីនរបស់អ្នក។");
        } else {
            alert("❌ បរាជ័យ: " + data.error);
        }
    })
    .catch(err => {
        console.error("Error:", err);
        alert("❌ មិនអាចទាក់ទងទៅ Server បានទេ! សូមប្រាកដថាអ្នកបានរត់ 'node server.js'");
    });
}