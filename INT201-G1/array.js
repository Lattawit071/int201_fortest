// -------------------------1. create array with literal Array-------------------------
// initial x with empty array
const x = [] // typeof array is object
console.log(typeof x)

if (x?.length === 0) console.log("This is empty Array")
else console.log("this is not empty Array")
console.log(x?.[0])

x[0] = 1
x[1] = 3
x[2] = 5
// add a new element in the end of Array
x.push(7)
x.push(9)
console.log(x)
// [1, 3, 5, 7, 9]

const y = [1, true, "beginner", 2.5]
console.log(y)
console.log(y[0]) // 1
console.log(y[y.length - 1]) //2.5
console.log(y.length) //4
// nested array
const z = [
  [2, 4, 6],
  [true, false],
  ["a", "b", "c"],
]
console.log(z[0]) // [2,4,6]
console.log(z[z.length - 1]) // ['a','b','c']

// nested with object
const m = [
  { productId: 1, name: "pen", price: 200 },
  { productId: 2, name: "notebook", price: 100 },
  { productId: 3, name: "pencil", price: 160 },
]
console.log(m.length)
console.log(m[0])
console.log(m[m.length - 1])
const n = { productId: [1001, 1002, 1003], productPrice: [100, 10, 15] }
console.log(n.productId)
console.log(n.productPrice)
// ----------------------------------------------------------------------------------


