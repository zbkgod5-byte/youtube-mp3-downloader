#include <iostream>
#include <string>
#include <filesystem>
#include <cstdlib>

using namespace std;
namespace fs = std::filesystem;

int main() {
    string folderPath;

    cout << "========================================\n";
    cout << "   Video to MP3 Converter (Auto Scan)\n";
    cout << "========================================\n";

    // Check ffmpeg
    if (!fs::exists("ffmpeg.exe")) {
        cout << "ERROR: ffmpeg.exe not found in program folder!\n";
        system("pause");
        return 1;
    }

    cout << "Enter folder path to scan mp4: ";
    getline(cin, folderPath);

    if (!folderPath.empty() && folderPath.back() != '\\' && folderPath.back() != '/')
        folderPath += "\\";

    if (!fs::exists(folderPath)) {
        cout << "ERROR: Folder not found!\n";
        system("pause");
        return 1;
    }

    int count = 0;

    cout << "\nScanning folder...\n";

    for (const auto& entry : fs::directory_iterator(folderPath)) {
        if (entry.path().extension() == ".mp4") {
            string input = entry.path().string();
            string output = entry.path().parent_path().string() + "\\" +
                            entry.path().stem().string() + "_audio.mp3";

            cout << "Found: " << input << endl;

            string cmd = "ffmpeg.exe -y -i \"" + input +
                         "\" -vn -ar 44100 -ac 2 -b:a 192k \"" +
                         output + "\"";

            int result = system(cmd.c_str());

            if (result == 0 && fs::exists(output)) {
                cout << "SUCCESS: " << output << endl;
            } else {
                cout << "FAILED: " << output << endl;
            }

            cout << "----------------------------------------\n";
            count++;
        }
    }

    if (count == 0) {
        cout << "No mp4 files found in this folder.\n";
    } else {
        cout << "\nConverted " << count << " file(s).\n";
    }

    cout << "Process finished.\n";
    system("pause");
    return 0;
}
