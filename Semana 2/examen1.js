function tablasDeMultiplicar(num){
    for(let i=1;i<=10;i++){
        console.log(num+"*"+i+"="+i*num);
    }
}

function tablasDel1al5(){
    for(let i=1;i<=5;i++){
        console.log("Tabla del "+i)
        tablasDeMultiplicar(i);
    }
}

tablasDel1al5();

function miFuncion(cadena){
    let resultado = "";
    for(let i=0;i<cadena.length;i++){
        for(let j=0;j<cadena.length;j++){
            resultado += cadena[i]+cadena[j]+" ";
        }
        resultado+='\n';
    }
    return resultado;
}