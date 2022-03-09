//El hoisting eleva las declaraciones en la parte superior del codigo

a = 2;
var a;//el hoisting se lleva esta declaracion a la parte superior cuando se compila el codigo.
console.log(a);


//En este caso el console.log arroja undefine por que simplemente la variable todavia no esta disponible
console.log(b);
var b = 5;

//En este caso eleva las funciones enla parte superior del codigo 
nameDog('Terror');
function nameDog(name) {
    console.log(name);
}
