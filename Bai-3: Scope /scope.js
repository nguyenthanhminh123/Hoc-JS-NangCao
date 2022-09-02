// Global
var globalMessage = 'Global'
function global(){
    console.log(globalMessage)
}
global()

// Code Block
{
    var age = 18
    console.log(age)
}

// Local scope 
function logger() {
    function logger2() {
        console.log("LOG 2")
    }

    logger2()
}
logger()

// khi gọi mỗi hàm mới có một phạm vi mới được tạo
function logger(first, last) {
    console.log(first, last)
}

logger('Thanh', 'Minh')
logger('Minh', 'Quân')
logger('Ba', 'Vi')


// Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
function logger() {
    const age = 18

    function logger2() {
        console.log(age)
    }
    logger2()
}
logger()
// Cách thức một biến được truy cập 
const age = 18
{
    {
        const age =16
        {
            const age =14
            {
              console.log(age)
            }
        }
    }
}

// Khi nào một biến bị xoá khỏi bộ nhớ?
function makeCouter() {
    let couter = 0

    function increase() {
        return ++couter
    }

    return increase
}

const increase1 = makeCouter()
console.log(increase1())
console.log(increase1())
console.log(increase1())
console.log(increase1())
