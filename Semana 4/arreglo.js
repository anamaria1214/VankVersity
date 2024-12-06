function contarHabilitados(usuarios) {
    var habilitados = 0;
    for (var id in usuarios) {
        if (usuarios[id] === "habilitado") {
            habilitados++;
        }
    }
    return habilitados;
}

function recorrerNumeros(objeto) {
    var numeros = objeto.numeros;

    for (var i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

function actualizarObjeto(objeto) {
    objeto.password = "user_7833";
    objeto.rol = "user";
    objeto.edad = 34;

    console.log(objeto);
}