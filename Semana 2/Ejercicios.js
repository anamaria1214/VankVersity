function calcularEdad(edadActual, anios){
    return edadActual+anios;
}

function calcularFactorial(tope, suma){
    if(tope==0){
        return suma;
    }else{
        return calcularFactorial(tope-1,tope*suma);
    }
}

function deCelsiusAFahrenheit(celsius) {
    let fahr = (celsius * 9/5) + 32;
    return fahr;
}

function numeroRandom(rango){
    return Math.floor(Math.random()*rango)+1;
}

function lanzamientoDados(){
    return numeroRandom(6)+numeroRandom(6);    
}

function calcularDescuento(valor, descuento){
    return valor - (valor*descuento)/100;
}

function calcularIVA(valor){
    return valor + (valor*19)/100;
}

function formulaGeneral(a,b,c){
    if((b*b-4*a*c)>=0){
        let sol1 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
        let sol2 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
        solucion ={sol1, sol2};
        return solucion;
    }else{
        console.log("Los números ingresados dan como resultado un número imaginario");
    }
}

function convertirSegundos(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return horas+" horas, "+minutos+" minutos, "+segundosRestantes+" segundos";
}

function valorAbsoluto(num){
    if(num>=0){
        return num;        
    }else{
        return num*-1;
    }
}

function calcularPorcentaje(cantidad, porcentaje) {
    let resultado = (cantidad * porcentaje) / 100;
    return resultado;
}