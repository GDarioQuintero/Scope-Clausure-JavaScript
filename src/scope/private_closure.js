//Manejo de variables  privadas conlos closure

const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
}

newPerson = person();
console.log(newPerson.getName());//Puedo acceder al valor de la variable name
newPerson.setName('German');//Reasigno otro valor a la variable 
console.log(newPerson.getName());//Imprime el nuevo valor de name
person.saveName = 'Gatto';//NO puede reescribir el valor de la variable por que no tiene acceso a ella
console.log(newPerson.getName());//Imprime el valor de name asignado por el metodo getName()