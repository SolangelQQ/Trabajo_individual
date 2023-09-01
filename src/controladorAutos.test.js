import devolverPosisionInicial from "./controladorAutos.js";

describe("Obtener posicion inicial", () => {
  it("Mostrar posicion inicial", () => {
    expect(devolverPosisionInicial("1,2 N")).toEqual("1,2 N");
  });

});
