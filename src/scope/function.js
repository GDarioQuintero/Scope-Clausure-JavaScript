//Funcion para asignar un valor dentro de la misma

const  fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();//Puene acceder a la variable 

//ASi funciona el scope local enuna funcion
const anotheFunction = () => {
    //con var podemos reasignar un nuevo valor a la variable
    var x = 1;
    var x = 2;

    //con let no podemos reasignar un nuevo valor a una variable enelmismo ambito, esto genera un error
    let y = 1;
    let y = 2;
    
    console.log(x);
    console.log(y);
}

//Utilizar let y const para declarar las variables, asi nos aseguramos de no sobreescribir el valor de nuestras variables