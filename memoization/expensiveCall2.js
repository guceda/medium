function expensiveCal(max, min) {
    const start = Date.now();
    let counter = min[0];
    while (Date.now()-start < max.val) counter++;
    return counter;
}