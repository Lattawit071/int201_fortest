//array.from 

const x = [1,2,4,8,16,32]
const y = Array.from(x)
console.log(x)
console.log(y)
console.log(y.length)

//memory address of x equal to memory address of y
if(x === y)
console.log('x===y')
else console.log('x!==y')
//not equal because x and y have not smae memory address 
//if u want x and y have a equal memory address 
// let x,y and x=y