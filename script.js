generateRandom(false);

function generateRandom(status = true) {
  var block = document.getElementById("mainPage");
  status ? (block.innerHTML = "") : null;
  for (var i = 1; i <= 9; i++) {
    block.innerHTML += '<div class="digit-cells col' + i + '">' + i + "</div>";
  }
}
function generateSequence(status = true) {
  var block = document.getElementById("mainPage");
  status ? (block.innerHTML = "") : null;
  var randomArray = [];
  for (var i = 1; i <= 9; i++) {
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
      block.innerHTML +=
        '<div class="digit-cells col' +
        randomNumber +
        '">' +
        randomNumber +
        "</div>";
    } else {
      --i;
    }
  }
}
