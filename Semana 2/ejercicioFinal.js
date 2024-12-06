let opcion=prompt("Ingrese una opción");

const suma = (a, b) => a+b;

const resta = (a, b) => a-b;

const multiplicacion =(a,b) => a*b;

const division= (a,b) => a/b;

function cuentaRegresiva(num){
    for(let i=num;i>=0;i--){
        console.log(i);
    }
}

function esDivisible(num, divi){
    if(num%divi==0){
        console.log(num+" es divisible por "+divi)
    }else{
        console.log(num+" no es divisible por "+divi)
    }
}

switch (opcion) {
    case 's':
        let a= parseInt(prompt("Ingrese el primer valor"));
        let b= parseInt(prompt("Ingrese el segundo valor"));
        console.log("El resultado de "+a+"+"+b+" es: "+suma(a,b));
        break;
    case 'r':
        let c= parseInt(prompt("Ingrese el primer valor"));
        let d=  parseInt(prompt("Ingrese el segundo valor"));
        console.log("El resultado de "+c+"-"+d+" es: "+resta(c,d));
        break;
    case 'm':
        let e= parseInt(prompt("Ingrese el primer valor"));
        let f=  parseInt(prompt("Ingrese el segundo valor"));
        console.log("El resultado de "+e+"*"+f+" es: "+multiplicacion(e,f));
        break;
    case 'd':
        let g= parseInt(prompt("Ingrese el primer valor"));
        let h=  parseInt(prompt("Ingrese el segundo valor"));
        if(h==0){
            console.log("No se puede dividir por 0");
        }else{
            console.log("El resultado de "+g+"/"+h+" es: "+division(g,h));
        }
        break;
    case 'c':
        let cuenta= parseInt(prompt("Ingrese el valor de la cuenta regresiva"));
        cuentaRegresiva(cuenta);
        break;
    case 'p':
        let p= parseInt(prompt("Ingrese el valor para saber si es divisible por 2 y 3"));
        esDivisible(p, 2);
        esDivisible(p, 3);
        break;
    case 'x':
        console.log("Va a salir del programa. Fin!!");
        break;
    default:
        console.log("Opción no válida");
}




