import devolvePosisionInicial, { validarCadena, validarDimension } from "./controladorAutos";

const comando_input = document.querySelector("#comando");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dimension_validada = validarDimension(comando_input.value)
  //const posicionInicial = devolvePosisionInicial(comando_input.value)
  div.innerHTML = "<p>" + dimension_validada+ "</p>";
});
