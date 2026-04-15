#include <iostream>
#include <string>
#include <vector>
#include <filesystem>
#include <cstdlib>

using namespace std;
namespace fs = std::filesystem;

int main() {
    string folderPath;
    vector<fs::path> files;
// ចាបផ្ដើមក្បាលដំបូង
    cout << "========================================\n";
    cout << "   Video MP4 Scanner (Select Convert)\n";
    cout << "========================================\n";
// ឆែកffmpegមានឬអត់
    if (!fs::exists("ffmpeg.exe")) {
        cout << "ERROR: ffmpeg.exe not found in program folder!\n";
        system("pause");
        return 1;
    }
// បញ្ចូលទឺតាំងfolderដែលមានវឺដេអូ_mp4
    cout << "Enter folder path to scan mp4: ";
// អានអត្ថបទ មួយជួរពេញ ទោះមានចន្លោះ Space ក៏ដោយ រហូតដល់អ្នកចុចប៊ូតុង Enter,, EX:ដូចជា C:\Users\Desktop\My Videos
    getline(cin, folderPath);
// ជួរកូដនេះធ្វើឡើងដើម្បីការពារកុំឱ្យកម្មវិធី Error នៅពេលវាព្យាយាមស្វែងរក File នៅក្នុង Folder ដែលមានឈ្មោះជាប់គ្នា (ឧទាហរណ៍៖ បើមិនថែម \ ទេ វានឹងស្វែងរក C:\Videosmovie1.mp4 ជំនួសឱ្យ C:\Videos\movie1.mp4)។
    if (!folderPath.empty() && folderPath.back() != '\\' && folderPath.back() != '/')
        folderPath += "\\";
// !fs::exists(folderPath) មានន័យថាប្រសិនបើរក Folder នោះមិនឃើញ។
    if (!fs::exists(folderPath)) {
        cout << "ERROR: Folder not found!\n";
        system("pause");
        return 1;
    }

    cout << "\nScanning folder...\n\n";
// វាមានតួនាទីដើររុករកគ្រប់ឯកសារទាំងអស់នៅក្នុង Folder ដែលអ្នកបានកំណត់ រួចចម្រាញ់យកតែឯកសារវីដេអូប្រភេទ .mp4 មកបង្ហាញ
    for (const auto& entry : fs::directory_iterator(folderPath)) //Syntax
// Filter តែ mp4 
    {
        if (entry.path().extension() == ".mp4")
// មានន័យថា បង្ហាញលេខរៀង + ឈ្មោះ file នៅលើអេក្រង់។
// EX 1. video1.mp4
//    2. movie.mp4
//    3. clip.mp4   
        {
            files.push_back(entry.path());
            cout << files.size() << ". " << entry.path().filename().string() << endl;
        }
    }
// បើគ្មាន file MP4 → program បញ្ឈប់។
    if (files.empty()) {
        cout << "\nNo mp4 files found.\n";
        system("pause");
        return 0;
    }
// បន្ទាត់នេះគឺសម្រាប់ ឲ្យ user ជ្រើសលេខ file ពី list ដែល program បង្ហាញ
    int choice;
    cout << "\nSelect file number to convert: ";
    cin >> choice;
// Code នេះគឺជា ការត្រួតពិនិត្យថា user ជ្រើសលេខ file ត្រឹមត្រូវឬអត់ មុនពេលយក file ទៅប្រើ
    if (choice < 1 || choice > files.size()) {
        cout << "Invalid selection!\n";
        system("pause");
        return 0;
    }
// បន្ទាត់ code ទាំងនេះគឺសម្រាប់ យក file ដែល user ជ្រើស → បង្កើតឈ្មោះ file output mp3 នៅ folder ដដែល
    fs::path input = files[choice - 1]; //យក file ពី vector = path file mp4 ដែល user ជ្រើស
    fs::path output = input.parent_path() / (input.stem().string() + "_audio.mp3");
// សម្រាប់ បង្ហាញឈ្មោះ file ដែលកំពុងត្រូវ convert នៅលើអេក្រង់
    cout << "\nConverting:\n" << input.string() << endl;
// សម្រាប់ បង្កើត string ដើម្បីហៅ FFmpeg បម្លែង MP4 → MP3
// ហៅ            FFmpeg program ;    input file (mp4) + ((-vn)មិនយក videoយកតែ audio)        output file mp3
    string cmd = "ffmpeg.exe -y -i \"" + input.string() + "\" -vn -ar 44100 -ac 2 -b:a 192k \"" + output.string() + "\"";
//  បន្ទាត់នេះគឺសម្រាប់ ដំណើរការ FFmpeg command ហើយរក្សាទុកលទ្ធផលត្រឡប់មកវិញ
    int result = system(cmd.c_str());
// បន្ទាត់នេះគឺសម្រាប់ ពិនិត្យលទ្ធផលនៃការបម្លែង MP4 → MP3 និងបង្ហាញសារជោគជ័យ ឬ ខូចជោគជ័យ
    if (result == 0 && fs::exists(output)) {
        cout << "\nSUCCESS: " << output.string() << endl;
    } else {
        cout << "\nFAILED to convert file.\n";
    }
// បន្ទាត់នេះគឺ សម្រាប់បញ្ចប់ program និងប្រាប់ user ថា process ទាំងអស់បានបញ្ចប់
    cout << "\nProcess finished.\n";
    system("pause");
    return 0;
}
