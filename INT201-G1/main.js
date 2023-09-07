function doSomething(msg) {
    if (msg === null || msg === undefined) {
        let someone = 'guest'
    }
    console.log(someone)
    return `hello, ${msg}`
}
doSomething()