//
const fruits = () => {
    //Establecemos un bloque y alli declaramos unas variables
    if (true) {
        var fruit = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
    }
    console.log(fruit);//Si imprime el valor de la variable
    console.log(fruit2);//NO tiene acceso a la variable por que let respeta al ambito del bloque
    console.log(fruit3);//NO tiene acceso a la variable por que const respeta al ambito del bloque
}

fruits();

//Esta es la de acceder avariables let y const dentro de bloques.
const fruits2 = () => {
    //Establecemos un bloque y alli declaramos unas variables
    if (true) {
        var fruit = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
        console.log(fruit2);//Tiene acceso solo dentro del bloque
        console.log(fruit3);//Tiene acceso solo dentro del bloque
    }
    console.log(fruit);//Si imprime el valor de la variable
}

fruits2();


//Otro aspecto de bloque 

let x = 1;//Variable global
{
    let x = 2;//variable de bloque
    console.log(x);//Imprime la variable declarada enel bloque 
}
console.log(x);//imprimela variable declarada  de manera global.



var y = 1;//Variable global
{
    var y = 2;//En este caso sobreescribe el valor de la vascribe de la variable global
    console.log(y);//Imprime la la variable sobreescrita 
}
console.log(y);//imprimela variable declarada  de manera global que ha sido sobreescrita en el bloque.


//--------------------------Otro caso----------------------------

//Utilizando var en la interaccion del for
const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();//Imprime el ultimo valor de i, de la ultima interaccion ose 10


//Utilizando let enla interaccion del for
const anotherFunction2 = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction2();//Imprime el ultimo todos los valores de cada interaccion , osea del 0 al 9