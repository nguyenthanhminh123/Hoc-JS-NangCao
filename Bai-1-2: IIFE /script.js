// IIFE trông như nào?
(function () {
    console.log('Message:', message)
})('Chao ban!')

// Dùng dấu ; Trước IIFE
let fullName = 'Minh Dang'
;(function() {
})()

// IIFE là hàm "private"
let i = 0

;(function myFunc (){
    i++
    console.log(i)

    if (i < 10)
        myFunc()
})()

// Sử dụng IIFE khi nào?
;(function() {
    let fullName = 'Son Dang'
})()
console.log(fullName)

// Các cách tạo ra một IIFE
!function() {
    let fullName = 'Thanh Minh'
    console.log(fullName)
}()

// Ví dụ sử dụng IIFE
const app = (function() {
    //Private
    const cars = []

    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})()
