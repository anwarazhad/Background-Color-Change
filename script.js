let colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", function() {
  let color = getRandomColor();
  document.body.style.backgroundColor = color;
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}