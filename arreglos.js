const numeros=[1,2,3,4,5,6];


console.log(numeros[2]);

const nombres=["juan","pedro","diego"];

console.log(nombres);

const cualquiercosa=[1,"Hola",2.5,true,{numero:1,nombre:"claudio"}];
console.log(cualquiercosa);

console.log(numeros.length);
for (let index = 0; index < numeros.length; index++) {
    console.log("["+numeros[index]+"]");
    
}

numeros.push(200);//agregar elementos
console.log(numeros)
numeros.unshift(300); //agregar elemento al principio
//numeros.pop();
console.log(numeros);

for (const iterator of numeros) {// recorre elementos de objetos
    console.log("xxxx"+iterator);
}

numeros.forEach(function(eL){
    console.log("yyyyyy"+eL);
})

console.log(numeros);

const numerosnuevos = numeros.map(function(eL) {
    return eL*2;
})


const numerosMayores=numeros.filter(eL=>eL>10);


const sumaArreglo=numeros.reduce((total,eL)=>total+eL,0)

console.log(sumaArreglo);



