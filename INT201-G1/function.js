// function doSomething(smg) {
//   return smg
// }

// console.log(doSomething("Yo"))
// console.log(doSomething("Hi"))
// console.log(doSomething("Hello"))
// console.log(typeof doSomething)
//function declaration
function concat(str1, str2) {
  return str1 + str2
}
// function expression
const toUpper = function (str1) {
  return str1.toUpperCase()
}
// named function expression
const reverse = function (str1) {
  return [...str1].reverse().join("")
}
console.log(concat("js ", "beginner"))
console.log(toUpper("hello world"))
console.log(reverse("hello world"))

const doSomething = function (str, op) {
  return op(str)
}

console.log(doSomething("Hey", toUpper))
console.log(doSomething("Hey", reverse))

const doIt = function () {
  return concat
}
const z = doIt()
console.log(typeof z) //function
console.log(z("1", "first")) //1first

const x = function (a) {
  a = 2
}

let b = 1
x(b)

