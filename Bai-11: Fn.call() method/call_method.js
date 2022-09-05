const teacher = {
    firstName: "Minh",
    lastName: "Thu",
}
const me = {
    firstName: "Sơn",
    lastName: "Đặng",
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
me.showFullName.call(teacher)

function Animal(name, weight) {
    this.name = name 
    this.weight = weight
}
function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}
const thanhminh = new Chicken('thanhminh', 66,2)
console.log(thanhminh)

function logger() {
    const arr = [...arguments]
    console.log(arr)
}
logger(1,2,3,4,5)

