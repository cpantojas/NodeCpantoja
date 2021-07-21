let texto="Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript."
//limpiando cadena
let texto=texto.replace('.','');
let texto=texto.replace('(','');
let texto=texto.replace(')','');
console.log(texto);
//contar cantidad de veces que esta cada palabra en el texto, omitir puntos comas y parentesis
//node=2
//js=1
//