"use strict";
var fullName = 'Thanh Minh' 
function testFunc () {
    var age = 18
}
testFunc()
console.log(fullName)
//console.log(age)

'use strict'

const student = {}

Object.defineProperty(student, 'fullName', {

    value: 'Nguyen thanh minh'
})
// student.fullName = 'Nguyen Van B'

console.log(student)

{
    function sum(a,b) {
        return a + b
    }
}
console.log(sum(9, 6))