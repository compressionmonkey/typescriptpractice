function log(title: string){
    return function(target, key, descriptor){
    console.log(target, key, descriptor);
    const original = descriptor.value;
    descriptor.value = function(...args: any[]){
        // calls the original method
        const result = original.apply(this, args);
        // log the call and the result
        console.log(`title ${title} ${key} with args ${JSON.stringify(args)} returned
            ${JSON.stringify(result)}`);
        // return the result
        return result;
    };
    return descriptor;
    };
}
class Calculator{
    @log('Calculator')
    square(n: number){
        return n * n;
    }
}

const calcuator = new Calculator();
calcuator.square(2);
calcuator.square(3);
