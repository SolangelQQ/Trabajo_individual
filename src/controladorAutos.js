function controladorAutito(comando){
  if(comando){
    let esValidoLaCadena = validarCadena(comando);
    if(!esValidoLaCadena) return "Error de entrada de comando";
    return true;
  }
  else return 'Ingrese una cadena';
}
function validarCadena(comando){
  let arregloDeCoincidencia = comando.match(/^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/);
  if(arregloDeCoincidencia) return true;
  else return false;
}

export { controladorAutito, validarCadena };