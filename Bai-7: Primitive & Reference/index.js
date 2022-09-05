// value 
let a = 1
let b = a
a = 2
console.log(b)

function sum(a, b) {
     a = 0
     b = 0
    console.log(a, b)
}
const c = 1
const d = 2

sum(c, d)

function createCar(obj) {
    obj = JSON.parse(JSON.stringify(obj))
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}
const newCar = createCar(car)

console.log(car)
console.log(newCar)