function checkText() {
  var inputText = document.getElementById("inputText").value;
  var imgThala = document.getElementById("imgThala");
  var celebration = document.getElementById("celebration");

  if (inputText.trim() === "") {
    displayResult("Enter something in the textbox! 😕");
    imgThala.style.display = "none";
    celebration.style.display = "none";
    return;
  }

  var sumOfNumbers = calculateSumOfNumbers(inputText);

  if (inputText.length === 7 || sumOfNumbers === 7) {
    displayResult("Thala For A Reason! 😎");
    playAudio("/thala.mp3");
    imgThala.style.display = "block";
    celebration.style.display = "block";
  } else {
    displayResult("Can't Find The Reason! 😥");
    imgThala.style.display = "none";
    celebration.style.display = "none";
  }
}

function calculateSumOfNumbers(text) {
  var numbers = text.match(/\d/g); // Extract all digits from the text
  if (numbers) {
    return numbers.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    }, 0);
  } else {
    return 0;
  }
}

function displayResult(result) {
  document.getElementById("result").innerText = result;
}

function clearResult() {
  document.getElementById("result").innerText = "";
}

function playAudio(url) {
  new Audio(url).play();
}

var checkButton = document.querySelector(".btn");

checkButton.addEventListener("click", function () {
  var myPopup = document.getElementById("myPopup");
  myPopup.classList.add("show");
});

var closePopup = document.getElementById("closePopup");

closePopup.addEventListener("click", function () {
  var myPopup = document.getElementById("myPopup");
  myPopup.classList.remove("show");
});
