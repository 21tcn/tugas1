const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const npm = urlParams.get('npm');
const gender = urlParams.get('gender');
const birthday = urlParams.get('birthday');
const hobby = urlParams.get('hobby');

document.getElementById("usernameDisplay").textContent = username;
document.getElementById("npmDisplay").textContent = npm;
document.getElementById("genderDisplay").textContent = gender;
document.getElementById("hobbyDisplay").textContent = hobby;
document.getElementById("birthdayDisplay").textContent = birthday;

