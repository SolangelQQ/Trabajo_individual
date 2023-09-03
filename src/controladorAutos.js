const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/
function controladorAutito(comando){
  if(comando){
    let esValidoLaCadena = validarCadena(comando);
    if(!esValidoLaCadena) return "Error de entrada de comando";
    return true;
  }
  else return 'Ingrese una cadena';
}
function validarCadena(comando){
  let arregloDeCoincidencia = comando.match(formato);
  if(arregloDeCoincidencia) return true;
  else return false;
}

function validarDimension(comando){
  return [0, 0];
}
export { controladorAutito, validarCadena, validarDimension };