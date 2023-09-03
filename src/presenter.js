import {devolvePosisionInicial, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion, validarComandos, controladorAutito } from "./controladorAutos";

const comando_input = document.querySelector("#comando");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultadoPosicionFinal = controladorAutito(comando_input.value);
  div.innerHTML = "<p>" + resultadoPosicionFinal + "</p>";
});
