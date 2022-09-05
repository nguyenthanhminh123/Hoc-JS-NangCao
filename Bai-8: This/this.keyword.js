const iPhone7 = {
    // Thuộc tính - Property
    name: 'iphone 7',
    color: 'Pink',
    weight: 300,

    // Phương thức - Method
    takePhoto() {
        console.log(this)
    },
    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this)
        }
    }
}
iPhone7.objChild.methodChild()

function Car(name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function() {
        console.log('Running...', this)
    }
}

const mercedesS450 = new Car('Mercedes S450', 'black', 1200)
console.log(mercedesS450.run())

// Button
const button = document.querySelector('button')

button.onclick = function() {
    console.log(this.innerText)
}

function Car(name, color) {
    this.name = name
    this.color = color
}

Car.prototype.run = function () {
    // context
    function test() {
        console.log(this)
    }
    test()
}
const porsche = new Car('Porsche', 'yellow')
const mercedesS45 = new Car('Mercedes S45', 'black')

console.log(porsche.run())
console.log(mercedesS450.run())
