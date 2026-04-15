// // JavaScript សម្រាប់ប្តូរ Form
// const signupArea = document.getElementById('signup-area');
// const loginArea = document.getElementById('login-area');
// const vTitle = document.getElementById('visual-title');

// function showLogin() {
//     signupArea.classList.add('hidden');
//     loginArea.classList.remove('hidden');
//     vTitle.innerHTML = "HELLO <br> AGAIN!";
// }

// function showSignup() {
//     loginArea.classList.add('hidden');
//     signupArea.classList.remove('hidden');
//     vTitle.innerHTML = "WELCOME <br> BACK!";
// }

const signupArea = document.getElementById("signup-area");
const loginArea = document.getElementById("login-area");
const vTitle = document.getElementById("visual-title");

function showLogin() {
  signupArea.classList.add("hidden");
  loginArea.classList.remove("hidden");
  vTitle.innerHTML = "HELLO <br> AGAIN!";
}

function showSignup() {
  loginArea.classList.add("hidden");
  signupArea.classList.remove("hidden");
  vTitle.innerHTML = "WELCOME <br> BACK!";
}

// មុខងារផ្ទៀងផ្ទាត់ និងរត់ទៅកាន់ Dashboard
document.getElementById("btnLogin").addEventListener("click", function () {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  // កំណត់លក្ខខណ្ឌ (ឈ្មោះ: admin, លេខសម្ងាត់: 1234)
  if (user === "phat" && pass === "1234") {
    alert("ចូលប្រើប្រាស់បានជោគជ័យ!");
    window.location.href = "admin.html"; // រត់ទៅកាន់ទំព័រ Dashboard
  } else {
    alert("ឈ្មោះអ្នកប្រើ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ!");
  }
});


// ចាប់យកប៊ូតុង Sign Up
const btnSignup = document.getElementById('btnSignup');

btnSignup.addEventListener('click', function() {
    const newUsername = document.getElementById('regUser').value;
    const newPassword = document.getElementById('regPass').value;

    if (newUsername !== "" && newPassword !== "") {
        // រក្សាទុកឈ្មោះ និងលេខសម្ងាត់ចូលក្នុង LocalStorage
        localStorage.setItem('storedUser', newUsername);
        localStorage.setItem('storedPass', newPassword);

        alert("ចុះឈ្មោះជោគជ័យ! លោកអ្នកអាចចូលប្រើបានឥឡូវនេះ។");
        showLogin(); // ប្តូរទៅទម្រង់ Login
    } else {
        alert("សូមបំពេញព័ត៌មានឱ្យបានគ្រប់គ្រាន់!");
    }
});

// ចាប់យកប៊ូតុង Login
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function() {
    const userIn = document.getElementById('loginUser').value;
    const passIn = document.getElementById('loginPass').value;

    // ទាញយកទិន្នន័យដែលធ្លាប់បានរក្សាទុកក្នុង LocalStorage
    const savedUser = localStorage.getItem('storedUser');
    const savedPass = localStorage.getItem('storedPass');

    // ឆែកលក្ខខណ្ឌ៖ បើទិន្នន័យដែលវាយបញ្ចូល ដូចនឹងទិន្នន័យដែលបានរក្សាទុក
    if (userIn === savedUser && passIn === savedPass) {
        alert("ចូលប្រើប្រាស់បានជោគជ័យ!");
        window.location.href = "admin.html";
    } else {
        alert("ឈ្មោះ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ! (ឬអ្នកមិនទាន់បានចុះឈ្មោះ)");
    }
});