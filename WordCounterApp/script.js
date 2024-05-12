let upperCase = document.querySelector("button");
let clearButton = document.querySelector("#clearButton");
let Trim = document.querySelector("#Trim");
let Reverse = document.querySelector("#Reverse");
let textArea = document.querySelector("textarea");
let extractURL = document.querySelector("#extractURL");
let text = 0;
upperCase.addEventListener("click", function () {
  if (text === 0) {
    textArea.value = textArea.value.toUpperCase();
    upperCase.innerHTML = "Change to Upper Case";
    text++;
  } else {
    textArea.value = textArea.value.toLowerCase();
    upperCase.innerHTML = "Change to Lower Case";
    text = 0;
  }
});

clearButton.addEventListener("click", function () {
  textArea.value = "";
});

Trim.addEventListener("click", function () {
  textArea.value = textArea.value.replace(/\s+/g, " ");
});

Reverse.addEventListener("click", function () {
  textArea.value = textArea.value.split("").reverse().join("");
});

extractURL.addEventListener("click", function () {
  const match = textArea.value.match(/https?:\/\/(www\.)?([^\/]+)/);
  if (match) {
    textArea.value = match[2];
  } else {
    textArea.value = "Invalid URL";
  }
});
