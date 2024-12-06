function imprimirConRetraso(mensaje) {
    setTimeout(function () {
        console.log(mensaje);
    }, 2000);
}

function procesarNombres(nombres) {
    return nombres.map(function (nombre) {
        return nombre.toUpperCase();
    }).sort();
}

function duplicarYFiltrarNumeros(numeros) {
    var duplicados = numeros.map(function (num) {
        return num * 2;
    });
    var mayoresDeDiez = duplicados.filter(function (num) {
        return num > 10;
    });
    return mayoresDeDiez;
}