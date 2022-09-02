// Hosting với "var", "function declaration"
// xét ví dụ
console.log(age) // undefined
console.log(fullName) // ReferenceError: fullName is not defined
var age = 16

console.log(sum(6, 9)) // 15

function sum(a, b) {
    return a + b
}

// Hoisting với "let", "const"
// xét ví dụ
{
    console.log(fullName) // ReferenceError: Cannot access 'fullName' before initialization
    let fullName = "Nguyen Thanh Minh"
}

// Bonus 
// xét ví dụ
const couter1 = makeCounter()

console.log(couter1()) // What's the output

function makeCounter() {
    let couter = 0

    return increase

    function increase() {
        return ++couter
    }
}