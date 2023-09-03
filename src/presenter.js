import {devolvePosisionInicial, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion } from "./controladorAutos";

const comando_input = document.querySelector("#comando");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const posicionOrientacionComando = validarOrientacion()
  div.innerHTML = "<p>" + "Posicion inicial: "+posicionOrientacionComando+ "</p>";
});
