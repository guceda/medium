function memoize(targetFn) {
    const cache = {};
      return function (x) {
          if (x in cache) {
              return cache[x]
          } else {
              return cache[x] = targetFn(x)
          }
      }
  }