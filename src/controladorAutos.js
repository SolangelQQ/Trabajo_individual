const formato_comando = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/
function arregloValidacion(comando){
  return comando.match(formato_comando);
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

function extraerCoordenadasCoincidencia(arregloDeCoincidencia,indice_x, indice_y){
  let possicion_x = parseInt(arregloDeCoincidencia[indice_x]);
  let posicion_y = parseInt(arregloDeCoincidencia[indice_y]);
  return [possicion_x, posicion_y];
}

function validarDimension(comando){
  let arregloDeCoincidencia = arregloValidacion(comando);
  if(arregloDeCoincidencia){
    return extraerCoordenadasCoincidencia(arregloDeCoincidencia, 1, 3);
  }
  return "Error de entrada de comando";

}

function validarPosicionInicial(comando){
  let arregloDeCoincidencia = arregloValidacion(comando);
  if(arregloDeCoincidencia){
    return extraerCoordenadasCoincidencia(arregloDeCoincidencia, 5, 7);
  }
  return "Error de entrada de comando"; 
}
export { controladorAutito, validarCadena, validarDimension, validarPosicionInicial };