function getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100,200,300]);
let myStrArr = getArray<string>(['Hello', 'World']);

console.log(myNumArr);
console.log(myStrArr);

// Array with number cannot add string
// compiler error 
// myNumArr.push('Hello');