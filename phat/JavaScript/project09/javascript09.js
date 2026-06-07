 const inpu = document.getElementById('myInput');
let pasteData = ""; // គួរប្រើ string ទទេជាតម្លៃដើម

inpu.addEventListener('paste', (event) => {
    // ១. ចាប់យកទិន្នន័យពី Clipboard
    pasteData = (event.clipboardData || window.clipboardData).getData('text');

    // ២. បង្ហាញលទ្ធផលភ្លាមៗនៅពេលផាស
    console.log("ទិន្នន័យដែលបានផាសគឺ: " + pasteData);

    // ៣. អ្នកអាចហៅ Function ផ្សេងទៀតឱ្យធ្វើការនៅទីនេះ
    processMyUrl(pasteData); 
});

// កុំសរសេរ console.log នៅទីនេះ ព្រោះវានឹងរត់មុនពេលអ្នកផាស
function processMyUrl(urll) {
    console.log("កំពុងរៀបចំ URL: " + urll);



const ytDlp = require('yt-dlp-exec');
const path = require('path');

// កំណត់ Link YouTube ឱ្យបានត្រឹមត្រូវ
const url = 'urll';

// កំណត់ទីតាំងដែលត្រូវរក្សាទុក (ទុកក្នុង Folder ជាមួយ Code នេះ)
const outputPath = path.resolve(__dirname, 'myusic.mp3');

console.log('កំពុងទាញយក និងបំលែង... សូមរង់ចាំ!');

async function downloadMusic() {
    try {
        await ytDlp(url, {
            extractAudio: true,
            audioFormat: 'mp3',
            output: outputPath,
            // ប្រសិនបើមានបញ្ហា Error ទៀត អាចថែមបន្ទាត់ខាងក្រោម៖
            // noCheckCertificates: true,
        });
        
        console.log('✅ ការបំលែងបានជោគជ័យ!');
        console.log('📍 ទីតាំង File: ' + outputPath);
    } catch (error) {
        console.error('❌ មានកំហុសក្នុងការទាញយក៖', error.message);
    }
}

downloadMusic();
} 