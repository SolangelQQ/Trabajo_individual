const formato_comando = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/
function arregloValidacion(comando){
  return comando.match(formato_comando);
}
function controladorAutito(comando){
  let salida;
  if(comando){
    let esValidoLaCadena = validarCadena(comando);
    if(esValidoLaCadena){
      let posicion = validarPosicionInicial(comando);
      let orientacion = validarOrientacion(comando);
      let comandos = validarComandos(comando);
      salida = 'Posicion inicial: ' + posicion + '\nComandos: ' + comandos + 
               '\nPosicion final: ' + posicion + ' ' + orientacion;
      }
      else {
        salida = "Error de entrada de comando";
      }
    }
    else salida ='Ingrese una cadena';
    return salida;
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

function validarOrientacion(comando){
  let arregloDeCoincidencia = arregloValidacion(comando, formato_comando);
  let orientacion = arregloDeCoincidencia[8];
  return orientacion; 
}

function validarComandos(comando){
  let arregloDeCoincidencia =arregloValidacion(comando, formato_comando);
  let orientacion = arregloDeCoincidencia[10];
  return orientacion;
}

function ejecutarComandos(comandosCadena){
    return 'O'
}
export { controladorAutito, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion, validarComandos, ejecutarComandos };