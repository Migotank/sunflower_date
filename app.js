var noButtonCount = 0;

function nextPage() {
  window.location.href = "yesbutton.html";
}

function moveButton() {
  noButtonCount++;

  if (noButtonCount >= 3) {
    window.location.href = "nobutton.html";
  }

  else {
    var noButton = document.getElementById('noButton');
    var ButtonWidth = noButton.offsetWidth;
    var ButtonHeight = noButton.offsetHeight;

    var maxX = window.innerWidth - ButtonWidth;
    var maxY = window.innerHeight - ButtonHeight;

    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }
}

function goBack() {
  window.history.back();
}
