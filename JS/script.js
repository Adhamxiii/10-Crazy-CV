var x = document.body;
var color = ["blue", "green", "yellow", "red", "pink"];
setInterval(function () {
  for (let y = 0; y < 5; y++) {
    x.style.backgroundColor = color[Math.floor(Math.random() * 5)];
  }
}, 100);
