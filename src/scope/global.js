//-------------------------Scope Global----------------------------------------------
//Podemos acceder a esta variable de manera global ya que no esta asignada a un bloqque
var hello = "Hola";//con var podemos asignar un nuevo valor a la variable

//Con let y const no podemos reasignar un nuevo valor a las varibles 
let world = 'Hello world';
const helloWorld = 'Hello World!';

//Desde la funcionpodemos acceder alas variable ya que estandefinida de manera global
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

