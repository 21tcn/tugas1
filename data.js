const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const npm = urlParams.get('npm');
const gender = urlParams.get('gender');
const birthday = urlParams.get('birthday');

document.getElementById("usernameDisplay").textContent = username;
document.getElementById("npmDisplay").textContent = npm;
document.getElementById("genderDisplay").textContent = gender;
document.getElementById("birthdayDisplay").textContent = birthday;

