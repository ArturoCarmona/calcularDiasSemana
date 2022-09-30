
/**
 * day: guarda el valor del dia ingresado
 * month guarda el valor del mes ingresado.
 * year: guarda el valor del años ingresado.
 * getDay: regresa con valor numerico (nD) el dia correspondiente,
 *          iniciando con 0 como domingo y finalizando con
 *          sábado como 6.
 * switch: regresa el nombre del dia (d) correspondiente con el numero nD
 * 
 * @returns regresa el dia correspondiente a la fecha ingresada e indica si 
 *          es o no un dia laboral.
 */
function fecha(){
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let nD = new Date(year+"-"+month+"-"+day+" "+"00:00:00").getDay();
    let d;
    switch (nD) {
        case 1:
            d = "lunes";
            break;
        case 2:
            d = "martes";
            break;
        case 3:
            d = "miércoles";
            break;
        case 4:
            d = "jueves";
            break;
        case 5:
            d = "viernes";
            break;
        case 0:
            d = "domingo";
            break;
        case 6:
            d = "sábado";
            break;
        default:
            break;
    }

    return respuesta.innerHTML = (`El fecha ingresada es ${d} y es un dia${(nD>=1 && nD<=5) 
        ? " laboral.":" no laboral."}`)
}
