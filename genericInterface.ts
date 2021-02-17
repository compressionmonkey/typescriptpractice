// Interfaces describing Object properties
interface Pair<T, U>{
    first: T;
    second: U;
}

let p: Pair<string, number> = { first: '10k', second: 1000 };
console.log(p)

interface Command<T, R>{
    id: T;
    run(): R;
}

let c: Command<String, number> = {
    id: Math.random().toString(36),
    run: function(){
        return 3;
    }
}

console.log(c.id);
console.log(c.run());
