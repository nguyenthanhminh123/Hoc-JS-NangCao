// this.firstName = "Minh"
// this.lastName = "Thu"

// // const teacher = {
// //     firstName: "Minh",
// //     lastName: "Thảo",
// //     getFullName(data1, data2) {
// //         console.log(data1,data2)
// //         return`${this.firstName} ${this.lastName}`
// //     }
// // }

// const student = {
//     firstName: "Thanh",
//     lastName: "Minh",
// }

// // Case1: 
// console.log(teacher.getFullName()) // "Minh thảo"

// // Case2 :
// const getTeacherName = teacher.getFullName.bind(student)

// console.log(getTeacherName()) // "Minh Thu"


const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const button = document.querySelector('button')

button.onclick = function() {
    teacher.getFullName()
}