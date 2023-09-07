// let x = 1 
// let y = x === 1 ? Math.random() * 2 + 3 / 5 : x
// console.log(x === 1 ? 1 : 0)
let m = null

//optional chaining
// console.log(m?.charAt(0))
// console.log(m?.[0])
// console.log(m?.id)

//nullish
let n = m ?? 0 //equals to m !== null && m !== undefined? m : 0
console.log(m)

let y =[] //array innitilization with empty array
let z ={} //object innitilization with no property
console.log(y) //empty array (not null and not undefined)
console.log(z) //empty object (not null and not undefined)

let a = [1,3,5,7]
a=a?? y // a = y
console.log(a) // [1,3,5,7]