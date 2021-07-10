function sumar(numero=0,numero2=0){
    return numero+numero2;
}

console.log(sumar(2,4));

const imprimir=function(){
    return"Imprimiendo datos";
}

const imprimir2=()=>{
    return"Imprimiendo datos";
}

const imprimir3=()=> console.log("Imprimiendo datos");

const imprimir4=(nombre,edad)=> `Saludos ${nombre} edad:${edad}`;

const imprimir5=(nombre,edad)=> {
    edad+=10;
    return `Saludos ${nombre} edad:${edad}`;
}


console.log(imprimir5("Cristian",29));