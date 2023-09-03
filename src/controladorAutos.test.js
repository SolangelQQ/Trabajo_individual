import {devolverPosisionInicial, validarPosicionInicial} from "./controladorAutos.js";

describe("Obtener posicion inicial", () => {
  it("Mostrar posicion inicial", () => {
    expect(devolverPosisionInicial("1,2 N")).toEqual("1,2 N");
  });
  it("Validar que la posicion inicial tenga el formato correcto", () => {
    expect(validarPosicionInicial("1,2 N")).toEqual(true);
  });

});
