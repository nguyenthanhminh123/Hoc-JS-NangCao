// Closure
function createCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = createCounter()

console.log(counter1())
console.log(counter1())
console.log(counter1())

const counter2 = createCounter()

console.log(counter2())
console.log(counter2())
console.log(counter2())

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}

const infoLogger = createLogger('Info')

infoLogger('Bắt đầu gửi mail')
infoLogger('Gửi mail lỗi lần 1, thử lại...')
infoLogger('Gửi mail thành công cho user xxx')

const errorLogger = createLogger('Error')

errorLogger('Gửi mail')
errorLogger('lỗi mail 1000 lần')
errorLogger('Gửi mail xịt')

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage
}

// Profile.js
const ProfileSetting = createStorage('profile_setting')

console.log(ProfileSetting.get('fullName'))

ProfileSetting.set('fullName', 'Minh Dangj')
ProfileSetting.set('age', '18')
ProfileSetting.set('address', 'Campuchia')

const ProfileSetting2 = createStorage('profile_setting2')

console.log(ProfileSetting.get('fullName'))

ProfileSetting.set('fullName', 'Minh Dangj')
ProfileSetting.set('age', '18')
ProfileSetting.set('address', 'Campuchia')


function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp()

app.show()
app.add('Cong Nong')
app.show()

app.add('Honda')
app.add('Porsche')
app.show()