const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/
function arregloValidacion(comando){
  return comando.match(formato);
}
function controladorAutito(comando){
  if(comando){
    let esValidoLaCadena = validarCadena(comando);
    if(!esValidoLaCadena) return "Error de entrada de comando";
    return true;
  }
  else return 'Ingrese una cadena';
}
function validarCadena(comando){
  let arregloDeCoincidencia = arregloValidacion(comando);
  if(arregloDeCoincidencia) return true;
  else return false;
}

function validarDimension(comando){
  let arregloDeCoincidencia = arregloValidacion(comando);
  let possicion_x = parseInt(arregloDeCoincidencia[1]);
  let posicion_y = parseInt(arregloDeCoincidencia[3]);
  return [possicion_x, posicion_y]
}

function validarPosicionInicial(comando){
  return [0, 0];
}
export { controladorAutito, validarCadena, validarDimension, validarPosicionInicial };