import {devolverPosisionInicial, validarCadena} from "./controladorAutos.js";

describe("Validar cadena", () => {
  it("Mostrar posicion inicial", () => {
    expect(devolverPosisionInicial("1,2 N")).toEqual("1,2 N");
  });
  it("Validar que la posicion inicial tenga el formato correcto", () => {
    expect(validarCadena('0,0/0,0a/aaa')).toEqual(true);
  });
  it("Validar cuando no tenga el formato correcto retorna false", () => {
    expect(validarCadena('0,0/0,0aaaa')).toEqual(false);
  });
});
