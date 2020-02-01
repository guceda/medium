const memoize = fn => {
    let cache = {};
    const PRIMITIVES = ['number', 'string', 'boolean'];
    return (...args) => {
        let strX = 
            args.length === 1 && PRIMITIVES.includes(typeof args[0])
                ? args[0]
                : JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args))
    }
}
function expensiveCal(max, min) {
    const start = Date.now();
    let counter = min[0];
    while (Date.now()-start < max.val) counter++;
    return counter;
}
const memExpensiveCal = memoize(expensiveCal);
const t1 = new Date().getTime();
const res = memExpensiveCal({val:1000}, [345]);
const t2 = new Date().getTime();
const res1 = memExpensiveCal({val:1000}, [345]);
const t3 = new Date().getTime();
const res2 = memExpensiveCal({val:478}, [777]);
const t4 = new Date().getTime();
console.log(`Result: ${res}. Took ${t2-t1}ms`);
console.log(`Result: ${res1}. Took ${t3-t2}ms`);
console.log(`Result: ${res2}. Took ${t4-t3}ms`);