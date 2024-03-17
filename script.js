let upperCaseChar = document.getElementById("uppercase");
let lowerCaseChar = document.getElementById("lowercase");
let digits = document.getElementById("digits");
let specialSymbols = document.getElementById("symbols");
let generatePassword = document.getElementById("generatePassword");
let display1 = document.querySelector("#display");

let charContent = "";
let password = "";

function check(x) {
  charContent = ''
  if (x.innerText == "radio_button_unchecked") {
    x.innerText = "check_circle";
    x.style.color = "lightgreen";
    display1.value = "";
    copyBtn.innerText = "file_copy";
  } else {
    x.innerText = "radio_button_unchecked";
    x.style.color = "white";
  }
}

generatePassword.addEventListener("click", function () {
  password = "";

  if (upperCaseChar.innerText === "check_circle") {
    charContent += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCaseChar.innerText === "check_circle") {
    charContent += "abcopqrdefghijklcdefgmnopqrstuvwxyz";
  }
  if (digits.innerText === "check_circle") {
    charContent += "012345678987654321567890345789";
  }
  if (specialSymbols.innerText === "check_circle") {
    charContent += "@#$%^&*_-*&%$^&*&^$$^*%$#";
  }

  if (charContent != "") {
    for (let i = 0; i < passDisplay.textContent; i++) {
      password += charContent[Math.floor(Math.random() * charContent.length)];
      console.log(password);
    }

    display1.value = password;
    historyData();
  } else {
    alert("Please select at least one option");
  }
});

let passDisplay = document.getElementById("passDisplay");
function passRange() {
  let passwordRange = document.getElementById("passwordRange");
  passDisplay.textContent = passwordRange.value;
}

let copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", function () {
  copyBtn.innerText = "done_all";
  display1.select();
  document.execCommand("copy");
  window.reload();
});

// History section

let generate = document.getElementById("generate");
let history = document.getElementById("history");
let historyPage = document.getElementById("historyPage");

history.addEventListener("click", function () {
  historyPage.style.top = 0;
  generate.style.opacity = 0;
});

let historyPageClose = document.getElementById("historyPageClose");

historyPageClose.addEventListener("click", function () {
  historyPage.style.top = "-100%";
  generate.style.opacity = 1;
});

function historyData() {
  var ulLIst = document.querySelector("ul");

  let li = document.createElement("li");

  li.innerHTML = `<div><span class="material-symbols-outlined">
    adjust
    </span><span id="passwordData">${display1.value}</span></div><span class="material-symbols-outlined passwordDelete" onclick="yourPasswordDelete(this)">
    delete
    </span>`;
  ulLIst.appendChild(li);
  saveData();
}

function yourPasswordDelete(x) {
  x.parentNode.remove();
  saveData();
}

function saveData() {
  var ulListHTML = document.querySelector("ul").innerHTML; // Get HTML content of ul element
  localStorage.setItem("myData", ulListHTML); // Save HTML content
}

function retrieveData() {
  var ulListHTML = localStorage.getItem("myData");
  if (ulListHTML) {
    document.querySelector("ul").innerHTML = ulListHTML; // Update HTML content of ul element
  }
}

retrieveData();
