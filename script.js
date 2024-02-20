let cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferari'];
console.log(cars.sort());

let fruits = ['apple', 'banana', 'kiwi'];
fruits.push('orange');
console.log(fruits);

let animals = ['dog', 'horse', 'monkey'];
animals.unshift('cat');
console.log(animals);

let str = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
let strlist = str.replaceAll('/', '<br>');
document.write(strlist + '<br>');
