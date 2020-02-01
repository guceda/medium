const memoize = fn => {
    let cache = {};
    return x => (x in cache ? cache[x] : (cache[x] = fn(x)))
  }
  function expensiveCal(max) {
      const start = Date.now();
      let counter = 0;
      while (Date.now()-start < max) counter++;
      return counter;
  }
  const memExpensiveCal = memoize(expensiveCal);
  const t1 = new Date().getTime();
  const res = memExpensiveCal(1000);
  const t2 = new Date().getTime();
  const res1 = memExpensiveCal(1000);
  const t3 = new Date().getTime();
  const res2 = memExpensiveCal(3468);
  const t4 = new Date().getTime();
  console.log(`Result: ${res}. Took ${t2-t1}ms`);
  console.log(`Result: ${res1}. Took ${t3-t2}ms`);
  console.log(`Result: ${res2}. Took ${t4-t3}ms`);