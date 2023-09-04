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

function ejecutarComandos(posicion,orientacion,comandosCadena){
  if(orientacion == 'n' || orientacion == 'N'){
    if(comandosCadena == 'i' || comandosCadena == 'I') orientacion = 'O';
    if(comandosCadena == 'd' || comandosCadena == 'D') orientacion = 'E';
    if(comandosCadena == 'a'  || comandosCadena == 'A') posicion[1] = posicion[1] + 1;
  }
  else if(orientacion == 'o' || orientacion == 'O'){
    if(comandosCadena == 'i' || comandosCadena == 'I') orientacion = 'S';
    if(comandosCadena == 'd' || comandosCadena == 'D') orientacion = 'N';
    if(comandosCadena == 'a'  || comandosCadena == 'A') posicion[0] = posicion[0] - 1;
   }
  
  else if(orientacion == 's' || orientacion == 'S'){
    if(comandosCadena == 'i' || comandosCadena == 'I') orientacion = 'E';
    if(comandosCadena == 'd' || comandosCadena == 'D') orientacion = 'O';
    if(comandosCadena == 'a' || comandosCadena == 'A') posicion[1] = posicion[1] - 1;
  }
  else if(orientacion == 'e' || orientacion == 'E'){
       if(comandosCadena == 'i' || comandosCadena == 'I') orientacion = 'N';
       if(comandosCadena == 'd' || comandosCadena == 'D') orientacion = 'S';
       if(comandosCadena == 'a' || comandosCadena == 'A') posicion[0] = posicion[0] + 1;
  }
  else {
    return "Error de entrada de comando"; 
  }

  return [posicion, orientacion];
}

export {controladorAutito, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion, validarComandos, ejecutarComandos };