import {devolvePosisionInicial, validarCadena, validarDimension, validarPosicionInicial } from "./controladorAutos";

const comando_input = document.querySelector("#comando");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const posicionInicial = validarPosicionInicial(comando_input.value)
  div.innerHTML = "<p>" + "Posicion inicial: "+posicionInicial+ "</p>";
});
