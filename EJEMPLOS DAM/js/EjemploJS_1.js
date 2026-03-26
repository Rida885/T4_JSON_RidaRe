// 1. Seleccionar todos los elementos (ej. todos los párrafos)
const elementos = document.querySelectorAll("p");

// 2. Recorrer con forEach
elementos.forEach((elemento, indice) => {
  console.log(`Elemento ${indice}:`, elemento.textContent);
  // Ejemplo: Cambiar color
  elemento.style.color = "blue";
});
