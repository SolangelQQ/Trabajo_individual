function devolverPosisionInicial(comando){
  return comando;
}
function validarCadena(cadena){
  let arregloDeCoincidencia = cadena.match(/^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/);
  if(arregloDeCoincidencia) return true;
  else return false;
}

export {devolverPosisionInicial, validarCadena};

