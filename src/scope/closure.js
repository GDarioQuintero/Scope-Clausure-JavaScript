//Es la combinacion de una funcion y el ambito lexico en la cual ha sido declarado dicha funcion
//Esto es un closure
const moneyBox = () => {
    let saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money Box $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(3);//imprime 3
myMoneyBox(5);//Recuerda la asignacion anterior e imprime  8
myMoneyBox(10);//Recuerda la asignacion anterior e imprime  10


//-----------------------Closure comambito lexico-------------------------------

const builCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const myConst = builCount(1);
myConst();//imprime 1
myConst();//imprime 2
myConst();//imprime 3

//Podemos trabajar con un nuevo alcance en otra funcion y contar de donde necesitemos.
const otherCount = builCount(10);
otherCount();//imprime 10
otherCount();//imprime 11
otherCount();//imprime 12
