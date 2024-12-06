function numeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

function permitirEntrada(edad, estatura, permiso) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido";
    } else if (edad < 18 && permiso) {
        return "Acceso permitido con permiso";
    } else {
        return "Acceso denegado";
    }
}

function evaluarNotas(nota1, nota2, nota3, nota4, nota5) {
    let cadena="";
    var promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (promedio >= 3.0) {
        cadena= "El estudiante aprobó";
    } else {
        cadena= "El estudiante no aprobó";
    }
    return cadena;
}