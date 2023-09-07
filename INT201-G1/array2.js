// 2.The ... Spread Operator
const x = [5, 7, 9]
const y = [...x, 11, 13, ...x]
console.log(y)
const z = "today is a good day"
const m = [...z]
console.log(m)
// for...of use
for (const ch of m) {
  console.log(ch)
}
for (const value of x) {
  console.log(value)
}
