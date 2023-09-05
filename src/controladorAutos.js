const formato_comando = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/
function arregloValidacion(comando){
  return comando.match(formato_comando);
}
function controladorAutito(comando){
  let salida;
  if(comando){
    let esValidoLaCadena = validarCadena(comando);
    if(esValidoLaCadena){
      let dimension = validarDimension(comando);
      let posicion = validarPosicionInicial(comando);
      let orientacion = validarOrientacion(comando);
      let comandos = validarComandos(comando);
      let posicionFinal = ejecutarComandos(posicion, orientacion, comandos)

      if(posicionFinal[0] >= [0,0] && posicionFinal[0] <= dimension){
         salida = 'Posicion inicial: ' + posicion + '\nComandos: ' + comandos + '\nPosicion final: ' + posicionFinal[0] + ' ' + posicionFinal[1];
      }
      else salida = 'El auto se encuentra fuera del rango';
      }
    else{
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
  let posicion_x = parseInt(arregloDeCoincidencia[indice_x]);
  let posicion_y = parseInt(arregloDeCoincidencia[indice_y]);
  return [posicion_x, posicion_y];
}

function validarDimension(comando){
  let arregloDeCoincidencia = arregloValidacion(comando);
  if(arregloDeCoincidencia){
    return extraerCoordenadasCoincidencia(arregloDeCoincidencia,1, 3);
  }
  return "Error de entrada de comando";
}

function validarPosicionInicial(comando){
  let arregloDeCoincidencia = arregloValidacion(comando);
  if(arregloDeCoincidencia){
    return extraerCoordenadasCoincidencia(arregloDeCoincidencia,5,7);
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

function ejecutarComandos(posicion, orientacion, comandosCadena){
  for (var i = 0; i < comandosCadena.length; i++){
    if(orientacion == 'n' || orientacion == 'N'){
      if(comandosCadena[i] == 'i' || comandosCadena[i] == 'I') orientacion = 'O';
      if(comandosCadena[i] == 'd' || comandosCadena[i] == 'D') orientacion = 'E';
      if(comandosCadena[i] == 'a'  || comandosCadena[i] == 'A') posicion[1] = posicion[1] + 1;
    }
    else if(orientacion == 'o' || orientacion == 'O'){
      if(comandosCadena[i] == 'i' || comandosCadena[i] == 'I') orientacion = 'S';
      if(comandosCadena[i] == 'd' || comandosCadena[i] == 'D') orientacion = 'N';
      if(comandosCadena[i] == 'a'  || comandosCadena[i] == 'A') posicion[0] = posicion[0] - 1;
    }
    else if(orientacion == 's' || orientacion == 'S'){
      if(comandosCadena[i] == 'i' || comandosCadena[i] == 'I') orientacion = 'E';
      if(comandosCadena[i] == 'd' || comandosCadena[i] == 'D') orientacion = 'O';
      if(comandosCadena[i] == 'a'  || comandosCadena[i] == 'A') posicion[1] = posicion[1] - 1;
    }
    else if(orientacion == 'e' || orientacion == 'E'){
      if(comandosCadena[i] == 'i' || comandosCadena[i] == 'I') orientacion = 'N';
      if(comandosCadena[i] == 'd' || comandosCadena[i] == 'D') orientacion = 'S';
      if(comandosCadena[i] == 'a'  || comandosCadena[i] == 'A') posicion[0] = posicion[0] + 1;
    }
    else{
      return "Error de entrada de comando";
    }
  }


  return [posicion, orientacion];
}

export {controladorAutito, validarCadena, validarDimension, validarPosicionInicial, validarOrientacion, validarComandos, ejecutarComandos };