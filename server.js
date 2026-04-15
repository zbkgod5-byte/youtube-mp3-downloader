const express = require('express');
const ytDlp = require('yt-dlp-exec');
const path = require('path');
const cors = require('cors');
const fs = require('fs'); // បន្ថែម fs ដើម្បីគ្រប់គ្រងឯកសារ

const app = express();
app.use(express.json());
app.use(cors());
// បន្ថែមនៅខាងក្រោម app.use(cors());
app.use(express.static(path.join(__dirname, 'phat/JavaScript/javascript.test')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'phat/JavaScript/javascript.test', 'test.html'));
});

// --- ១. Route សម្រាប់បញ្ជាឱ្យទាញយកពី YouTube មកទុកក្នុង Server ---
app.post('/download', async (req, res) => {
    const url = req.body.url;
    const fileName = `music-${Date.now()}.mp3`;
    const outputPath = path.resolve(__dirname, 'downloads', fileName);

    // បង្កើត folder 'downloads' បើមិនទាន់មាន
    if (!fs.existsSync('downloads')) fs.mkdirSync('downloads');

    console.log('កំពុងទាញយកពី YouTube:', url);

    try {
        await ytDlp(url, {
            extractAudio: true,
            audioFormat: 'mp3',
            output: outputPath,
        });
        
        console.log('✅ ទាញយកមក Server រួចរាល់!');
        // ផ្ញើឈ្មោះ File ត្រឡប់ទៅឱ្យ Frontend វិញ
        res.json({ success: true, fileName: fileName });
    } catch (error) {
        console.error('❌ កំហុស:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

// --- ២. Route ថ្មីសម្រាប់ឱ្យ User ចុច Download ពី Server មកម៉ាស៊ីនផ្ទាល់ ---
app.get('/get-file', (req, res) => {
    const fileName = req.query.name;
    const filePath = path.resolve(__dirname, 'downloads', fileName);

    if (fs.existsSync(filePath)) {
        // ប្រើ res.download ដើម្បីឱ្យ Browser ចាប់ផ្ដើម Download មកក្នុងទូរស័ព្ទ/កុំព្យូទ័រ
        res.download(filePath, fileName, (err) => {
            if (err) console.log("បញ្ហាក្នុងការផ្ញើ File:", err);
        });
    } else {
        res.status(404).send("រកមិនឃើញ File ទេ!");
    }
});

// កូដដែលត្រឹមត្រូវសម្រាប់ Cloud
const PORT = process.env.PORT || 3000; 

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});