const circle = document.getElementById("circle");
const changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  circle.style.backgroundColor = randomColor;
});


const shape = document.getElementById("shape");
const changeShape = document.getElementById("changeShape");

changeShape.addEventListener("click", () => {
  shape.classList.add("triangle");
});