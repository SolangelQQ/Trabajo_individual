import {controladorAutito, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion, validarComandos, ejecutarComandos} from "./controladorAutos.js";

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

describe("Ejecutar comandos", () => {
  it("Ejecutacion de la orientacion 'n', comando 'i' y devuelve O con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'n', 'i')).toEqual([[0, 0], 'O']);
  });
  it("Ejecucion de la orientacion 'n', comando 'I' y devuelve O con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'n', 'I')).toEqual([[0, 0], 'O']);
  });
  it("Ejecucion de la orientacion 'n', comando 'I' y devuelve O con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'N', 'I')).toEqual([[0, 0], 'O']);
  });
  it("Ejecucion de la orientacion 'n', comando 'I' y devuelve O con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'N', 'i')).toEqual([[0, 0], 'O']);
  });

  it("Ejecucion de la orientacion 'N', comando 'd' y devuelve E con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'N','d')).toEqual([[0, 0], 'E']);
  });
  it("Ejecucion de la orientacion 'N', comando 'd' y devuelve E con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'N', 'D')).toEqual([[0, 0], 'E']);
  });
  it("Ejecucion de la orientacion 'n', comando 'D' y devuelve E con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'n', 'D')).toEqual([[0, 0], 'E']);
  });
  it("Ejecucion de la orientacion 'n', comando 'd' y devuelve E con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'n', 'd')).toEqual([[0, 0], 'E']);
  });

  it("Ejecucion de la orientacion 'n', comando 'a' y devuelve su avance en la posicion y orientacion", () => {
    expect(ejecutarComandos([0, 0],'n','a')).toEqual([[0, 1], 'n']);
  });
  it("Ejecucion de la orientacion 'N', comando 'a' y devuelve su avance en la posicion y orientacion", () => {
    expect(ejecutarComandos([0, 0],'N','a')).toEqual([[0, 1], 'N']);
  });
  it("Ejecucion de la orientacion 'n', comando 'a' y devuelve su avance en la posicion y orientacion", () => {
    expect(ejecutarComandos([0, 0],'n','A')).toEqual([[0, 1], 'n']);
  });
  it("Ejecucion de la orientacion 'n', comando 'a' y devuelve su avance en la posicion y orientacion", () => {
    expect(ejecutarComandos([0, 0],'N','A')).toEqual([[0, 1], 'N']);
  });


  it("Ejecutar comando/instruccion 'd' con cualquier orientacion", () => {
    expect(ejecutarComandos([0, 0], 's', 'D')).toEqual([[0,0], 'O']);
  });
  it("Ejecucion de comando 'd' con una orientacion hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 's', 'd')).toEqual([[0,0], 'O']);
  });
  it("Ejecucion de comando 'D' con una orientacion hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 'S', 'D')).toEqual([[0,0], 'O']);
  });
  it("Ejecucion de comando 'd' con una orientación hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 'S', 'd')).toEqual([[0, 0], 'O']);
  });

  it("Ejecucion de comando 'i' con una orientación hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 'S', 'i')).toEqual([[0, 0], 'E']);
  });
  it("Ejecucion de comando 'i' con una orientación hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 'S', 'I')).toEqual([[0, 0], 'E']);
  });
  it("Ejecucion de comando 'i' con una orientación hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 's', 'i')).toEqual([[0, 0], 'E']);
  });
  it("Ejecucion de comando 'i' con una orientación hacia el sur", () => {
    expect(ejecutarComandos([0, 0], 's', 'I')).toEqual([[0, 0], 'E']);
  });


  it("Ejecucion de comando 'd' con una orientacion hacia el este", () => {
    expect(ejecutarComandos([0, 0], 'e', 'd')).toEqual([[0,0], 'S']);
  });
  it("Ejecucion de comando 'D' con una orientacion hacia el este", () => {
      expect(ejecutarComandos([0, 0], 'E', 'D')).toEqual([[0,0], 'S']);
  });
  it("Ejecucion de comando 'd' con una orientación hacia el este", () => {
    expect(ejecutarComandos([0, 0], 'E', 'd')).toEqual([[0, 0], 'S']);
  });
  it("Ejecucion de comando 'D' con una orientación hacia el este", () => {
    expect(ejecutarComandos([0, 0], 'e', 'D')).toEqual([[0, 0], 'S']);
  });

  it("Ejecucion de comando 'i' con una orientación hacia el este", () => {
    expect(ejecutarComandos([0, 0], 'E', 'i')).toEqual([[0, 0], 'N']);
  });
  it("Ejecucion de la orientacion 'e', comando 'i' y devuelve N con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'e', 'i')).toEqual([[0, 0], 'N']);
  });
  it("Ejecucion de la orientacion 'e', comando 'I' y devuelve N con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'e', 'I')).toEqual([[0, 0], 'N']);
  });
  it("Ejecucion de la orientacion 'E', comando 'I' y devuelve N con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'E', 'I')).toEqual([[0, 0], 'N']);
  });


  it("Ejecucion de un comando 'd' con una orientacion hacia el oeste", () => {
    expect(ejecutarComandos([0, 0], 'o', 'd')).toEqual([[0,0], 'N']);
  });
  it("Ejecucion de un comando 'D' con una orientacion hacia el oeste", () => {
    expect(ejecutarComandos([0, 0], 'o', 'D')).toEqual([[0,0], 'N']);
  });
  it("Ejecucion de comando 'd' con una orientación hacia el oeste", () => {
    expect(ejecutarComandos([0, 0], 'O', 'd')).toEqual([[0, 0], 'N']);
  });
  it("Ejecucion de comando 'D' con una orientación hacia el oeste", () => {
    expect(ejecutarComandos([0, 0], 'O', 'D')).toEqual([[0, 0], 'N']);
  });


  it("Ejecutar comando/instruccion 'i' con cualquier orientacion", () => {
    expect(ejecutarComandos([0, 0], 'O', 'I')).toEqual([[0,0], 'S']);
  });
  it("Cambiar orientación de 'o' a 'S'", () => {
    expect(ejecutarComandos([0, 0], 'o', 'i')).toEqual([[0, 0], 'S']);
  });
  it("Ejecucion de comando 'i' con una orientación hacia el oeste", () => {
    expect(ejecutarComandos([0, 0], 'O', 'i')).toEqual([[0, 0], 'S']);
  });
  it("Ejecucion de la orientacion 'o', comando 'I' y devuelve S con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'o', 'I')).toEqual([[0, 0], 'S']);
  });
  it("Ejecucion de la orientacion 'x', comando 'I' y devuelve S con su posicion inicial", () => {
    expect(ejecutarComandos([0, 0], 'x', 'I')).toEqual("Error de entrada de comando");
  });

  it("Ejecucion de comando 'a' con orientacion E", () => {
    expect(ejecutarComandos([0, 0], 'E', 'A')).toEqual([[1,0], 'E']);
  });
  it("Ejecucion de comando 'a' con orientacion e", () => {
    expect(ejecutarComandos([0, 0], 'e', 'A')).toEqual([[1,0], 'e']);
  });
  it("Ejecucion de comando 'a' con orientacion e", () => {
    expect(ejecutarComandos([0, 0], 'e', 'a')).toEqual([[1,0], 'e']);
  });
  it("Ejecucion de comando 'a' con orientacion E", () => {
    expect(ejecutarComandos([0, 0], 'E', 'a')).toEqual([[1,0], 'E']);
  });

  it("Ejecucion de comando 'a' con orientacion O", () => {
    expect(ejecutarComandos([0, 0], 'O', 'A')).toEqual([[-1,0], 'O']);
  });
  it("Ejecucion de comando 'a' con orientacion o", () => {
    expect(ejecutarComandos([0, 0], 'o', 'A')).toEqual([[-1,0], 'o']);
  });
  it("Ejecucion de comando 'a' con orientacion o", () => {
    expect(ejecutarComandos([0, 0], 'o', 'a')).toEqual([[-1,0], 'o']);
  });
  it("Ejecucion de comando 'a' con orientacion O", () => {
    expect(ejecutarComandos([0, 0], 'O', 'a')).toEqual([[-1,0], 'O']);
  });
  

  it("Ejecucion de comando 'a' con orientacion S", () => {
    expect(ejecutarComandos([0, 0], 'S', 'A')).toEqual([[0,-1], 'S']);
  });
  it("Ejecucion de comando 'a' con orientacion s", () => {
    expect(ejecutarComandos([0, 0], 's', 'A')).toEqual([[0,-1], 's']);
  });
  it("Ejecucion de comando 'a' con orientacion s", () => {
    expect(ejecutarComandos([0, 0], 's', 'a')).toEqual([[0,-1], 's']);
  });
  it("Ejecucion de comando 'a' con orientacion S", () => {
    expect(ejecutarComandos([0, 0], 'S', 'a')).toEqual([[0,-1], 'S']);
  });
})  