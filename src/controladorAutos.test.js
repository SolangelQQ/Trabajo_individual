import {controladorAutito, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion, validarComandos} from "./controladorAutos.js";

describe("Validar cadena", () => {
  it("Mostrar posicion inicial", () => {
    expect(controladorAutito('')).toEqual('Ingrese una cadena');
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
  it("Devuelve un mensaje de error si la dimension es invalida", () => {
    expect(validarDimension('a/17,3a/aaa')).toEqual('Error de entrada de comando');
  });
});

describe("Validar posicion inicial", () => {
  it("Validar la posicion inicial de una cadena de entrada '0,0/0,0a/aaa'", () => {
    expect(validarPosicionInicial('0,0/0,0a/aaa')).toEqual([0, 0]);
  });
  it("Validar la posicion inicial de cualquier cadena de entrada ", () => {
    expect(validarPosicionInicial('20,15/17,1a/aaa')).toEqual([17, 1]);
  });
  it("Devuelve un mensaje de error si la posicion inicial es invalida", () => {
    expect(validarPosicionInicial('20,15/a/aaa')).toEqual('Error de entrada de comando');
  });
});

describe("Validar orientacion", () => {
  it("Devuelve los comandos/instruciones de la cadena '0,0/0,0a/aaa'", () => {
    expect(validarComandos('0,0/0,0a/aaa')).toEqual('aaa');
  });
  it("Devuelve los comandos/instruciones de cualquier cadena", () => {
    expect(validarComandos('11,33/2,4a/add')).toEqual('add');
  }); 
});
describe("Controlador Autito", () => {
  it("Devuelve posicion inicial, comandos y posicion final", () => {
  expect(controladorAutito('0,0/0,0N/I')).toEqual('Posicion inicial: 0,0\nComandos: I\nPosicion final: 0,0 N');
  });
});