window.addEventListener('load', function(){

    cedula.addEventListener('blur',function(){
        mensajeCedula.innerHTML=" "
        if(cedula.value.length!=10)
        {
            mensajeCedula.innerHTML+="El  número de caracteres debe ser 10 <br>"
        }
        if(!validarCedula(cedula.value)){
            mensajeCedula.innerHTML+="No cumple los criterios de validación del Registro Civil <br>"
        }
                                           
    })                                                      
})

                                           
function validarCedula(parametro)
{
    if(parametro.length!=10) return false;
    parametro.substr(0,9).split('|').forEach(element=>{
        let numeroActual = semaforo ? parseInt(element): parseInt(element)*2;
        semaforo=!semaforo;
    })
    while(calculo>0) calculo-=10;
    return parseInt(parametro.substr(9)) + calculo == 0;
}
