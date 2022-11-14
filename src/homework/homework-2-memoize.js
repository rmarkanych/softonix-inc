// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

function memoize (fn) {
  const cache = new Map()

  return (...args) => {
    const key = JSON.stringify(args)

    if (cache.has(key)) return cache.get(key)

    return cache.set(key, fn(...args))
  }
}

// приклад виконання вашого коду
export const sumMemoized = memoize(sum)

console.log(sumMemoized(1, 3)) // результат 4
console.log(sumMemoized(3, 3)) // результат 6
console.log(sumMemoized(1, 3)) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
