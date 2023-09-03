import {controladorAutito, validarCadena, validarDimension} from "./controladorAutos.js";

describe("Validar cadena", () => {
  it("Mostrar posicion inicial", () => {
    expect(controladorAutito('')).toEqual('Ingrese una cadena');
  });
  it("Manejar caso de comando válido con letras mayúsculas y minúsculas", () => {
    expect(controladorAutito('5,10/15,20a/bcd')).toEqual(true);
    expect(controladorAutito('1,2/3,4A/XYZ')).toEqual(true);
  });
  it("Validar que la posicion inicial tenga el formato correcto", () => {
    expect(validarCadena('0,0/0,0a/aaa')).toEqual(true);
  });
  it("Validar cuando no tenga el formato correcto retorna false", () => {
    expect(validarCadena('0,0/0,0aaaa')).toEqual(false);
  });
  it("Validar comando de entrada y mostrar mensaje de error", () => {
    expect(controladorAutito('0,0/0,0aaaa')).toEqual('Error de entrada de comando');
  });
});

describe("Validar dimension", () => {
  it("Validar dimension de una cadena de dimension [0, 0]", () => {
    expect(validarDimension('0,0/0,0a/aaa')).toEqual([0, 0]);
  });
  it("Validar dimension de cualquier cadena", () => {
    expect(validarDimension('100,17/0,0a/aaa')).toEqual([100, 17]);
  });
});

