let VAR=50;

for(let i=0;i<4;i++){
    console.log(VAR);
}

function imprimirNumeros(n){
    if(n==0){
        console.log("El número que ingresó no es valido");
    }else{
        for(let i=1;i<=n;i++){
            console.log(i);
        }
    }
}
function obtenerPrimeraLetra(nombre){
    return nombre.charAt(0);
}
function esVocal(letra){
    if(letra.toLowerCase()=='a' || letra.toLowerCase()=='e' || letra.toLowerCase()=='i'|| letra.toLowerCase()=='o' || letra.toLowerCase()=='u'){
        return true;
    }else{
        return false;
    }
}

function halarVocales(palabra){
    let cont=0;
    for(let i=0; i<palabra.length;i++){
        if(esVocal(palabra[i])){
            cont++;
        }
    }
    return cont;
}
function esPar(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
function sumarNumerosPares(n){
    suma=0;
    if(n>1){
        for(let i=1;i<=n;i++){
            if(esPar(i)){
                suma=suma+i;
            }
        }
    return suma;
    }else{
        console.log("El número que ingresó no es valido");
    } 
}
function esPrimo(n){
    let flag=true;
    for(let i=1;i<=n && flag;i++){
        if(n%i==0 && i!=1 && i!=n){
            flag=false;
        }
    }
    return flag;
}
function esPalindromo(n){
    flag=true;
    for(let i=0;i<n.toString() && flag;i++){
        if(n.toString()[i]!=n.toString()[n.toString().length-1-i]){
            flag= false;
        }
    }
    return flag;
}

function esPalindromo(numero) {
    const strNumero = numero.toString();
    const strReverso = strNumero.split('').reverse().join('');
    return strNumero === strReverso;
}

