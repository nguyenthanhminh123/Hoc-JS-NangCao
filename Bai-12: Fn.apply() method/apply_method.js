const teacher = {
    firstName: "Minh thu",
    lastName: "Thu"
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`
}

let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)'])

console.log(result)
// So sánh với call() method
result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)')

console.log(result)


const teacher2 = {
    firstName: "Minh",
    lastName: "Thảo",
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOnline = false
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}

const me = {
    firstName: "Thanh",
    lastName: " minh",
    isOnline: false,
}

console.log('Teacher:', teacher.isOnline)
teacher.goOnline()
console.log('Teacher:', teacher.isOnline)

console.log('-----------------')

console.log('Student:', me.isOnline)
teacher.goOnline.apply(me)
console.log('Student:', me.isOnline)


function Animal(name, weigth) {
    this.name = name
    this.weigth = weigth
}

function Parrot(name, weigth) {
    Animal,apply(this, [name, weigth])
    this.speak = function() {
        console.log('Nhà có khách!')
    }
}

const conVet = new Parrot('Vẹt', 300)

console.log(conVet.speak())

function fn() {}

console.log(fn.bind === Function.prototype.bind) // true
console.log(fn.call === Function.prototype.call) // true
console.log(fn.apply === Function.prototype.apply) // true

