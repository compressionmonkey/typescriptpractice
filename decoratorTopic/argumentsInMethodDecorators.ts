function log(target, key, descriptor){
    console.log(target, key, descriptor);
    const original = descriptor.value;
    console.log('original',original);
    descriptor.value = function(...args: any[]){
        // calls the original method
        const result = original.apply(this, args);
        console.log('hay', result, args);
        // log the call and the result
        console.log(`${key} with args ${JSON.stringify(args)} returned
            ${JSON.stringify(result)}`);
        // return the result
        return result;
    };
    return descriptor;
}

class Calculator{
    @log
    square(n: number){
        return n * n;
    }
}

const calcuator = new Calculator();
calcuator.square(2);
calcuator.square(3);
