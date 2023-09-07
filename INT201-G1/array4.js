// 4. creat array with Array.of() Function
const x = Array.of(5)
const y = Array.of(1, 5, 7)
const z = Array.of(true, "a", "35")

console.log(x.length)
console.log(y.length)
console.log(z.length)
console.log("------------------------------------------------------------")
// 5. create array with Array.from() method
const a = [1, 3, 5]
const b = [2, 4, 6]
const c = Array.from(a) //Array.from method
console.log(c)
const d = [...a, ...b] //Spread operator
console.log(d)

delete a[1]
console.log(a)

