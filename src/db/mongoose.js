const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(password) {
            if (password.toLowerCase().includes('password')) {
                throw new Error('Be more creative')
            }
        }
    },  
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) { 
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    title: 'Another Test Task',
    completed: false
})

task.save()
.then((task) => {
    console.log('task: ', task)
})
.catch((error) => {
    console.log('error: ', error)
})

// const me = new User({
//     name: 'Steve',
//     email: 'selmetwa@gmail.com',
//     password: 'prep203000',
//     age: 21
// })

// me.save()
// .then((me) => {
//     console.log('me: ', me)
// })
// .catch((error) => {
//     console.log('error: ', error)
// })