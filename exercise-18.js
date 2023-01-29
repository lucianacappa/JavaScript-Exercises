// Evento para el botón "Guardar"
const saveButton = document.querySelector("button");
saveButton.addEventListener("click", function() {
  alert("Guardado");
});

// Evento para el input del nombre
const nameInput = document.querySelector("input[type='text']");
nameInput.addEventListener("focus", function() {
  nameInput.style.backgroundColor = "yellow";
});
nameInput.addEventListener("blur", function() {
  nameInput.style.backgroundColor = "white";
});

// Evento para el input de la letra
const letterInput = document.querySelectorAll("input[type='text']")[1];
letterInput.addEventListener("input", function() {
  const letter = letterInput.value;
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    letterInput.style.color = "red";
  } else {
    letterInput.style.color = "black";
  }
});
