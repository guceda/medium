function expensiveCal(max) {
    const start = Date.now();
    let counter = 0;
    while (Date.now()-start < max) counter++;
    return counter;
}