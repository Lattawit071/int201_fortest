function concat(str1,str2){
    return str1 + str2
}
console.log(concat('hello', ' world'))

const toLower = function(str){
    return str.toLowerCase()
}

//calling function, execute function
console.log(toLower('HELLOWORLD'))



const doSomething = toLower 
console.log(doSomething('HI'))//'hi'
const y = toLower('Hey')//function
console.log(typeof doSomething)//'hey'
console.log(y)//'hey'
console.log(typeof y)//string

const doIt = function(op,str1,str2){
    //parameter passing
    //op = concat,str = 'good', str2='morning'
    return op(str1,str2)
}

console.log(doIt(concat, 'good', 'morning'))
console.log(doIt(toLower, 'GOOD', 'MORNING'))//goodmorning

 function a(){
    return toLower
 }

const m=a()
console.log(m('ABC'))


