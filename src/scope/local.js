
const helloWorld = () => {
    const hello = 'Hello World';//Variable local
    console.log(hello);
}

helloWorld();//Accedo a la variable local invocando la funcion en donde se encuenta la variable
//console.log(hello);//NO puedo acceder a la variable directamente, lo tengo que hacer por medio de la funcion

//De la siguiente manera podemos tener la misma variable y asignarle un valor de manera local y uno de manera global

var scope = "I am global";

//Se le conoce como el ambito lexico

const functionScope = () => {
    var scope = "I am local";
    const funct = () => {
        return scope;
    }
    console.log(scope);
}

functionScope();//Imprime la variable local que esta en la funcion
console.log(scope);//Imprime la variable global 