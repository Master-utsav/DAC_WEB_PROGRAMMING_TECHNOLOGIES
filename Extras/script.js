const fxn = (value) => {
    let sum = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
        sum += i;
    }
    return value * value;
}

function memoize(fxn) {
    const cache = {};

    return (n) => {
        if (cache[n]) return cache[n];
        cache[n] = fxn(n);
        return cache[n];
    };

}
const expensiveCall = memoize(fxn);
const start1 = Date.now();
expensiveCall(5);
const end1 = Date.now();
console.log((end1 - start1) / 1000);


const start2 = Date.now()
expensiveCall(5);
const end2 = Date.now()
console.log((end2 - start2) / 1000)

const start3 = Date.now()
expensiveCall(5)
const end3 = Date.now()
console.log((end2 - start2) / 1000)


const start4 = Date.now()
expensiveCall(5)
const end4 = Date.now()
console.log((end2 - start2) / 1000)




    
