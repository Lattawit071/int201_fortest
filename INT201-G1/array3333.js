const x = [1,9,11]
const y = [3,5,7] 
//using spread operator
const z = [...x,...y]
console.log(z)

const a = [1,...y,11]
console.log(a)
console.log(a[2])

const str = 'hello world'
const collStr = [...str]
console.log(collStr)

for(const ch of collStr){
    console.log(ch)
}

