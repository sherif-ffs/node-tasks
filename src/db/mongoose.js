const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    title: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    title: 'Test Task',
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
//     name: 'Sherif',
//     age: 22
// })

// me.save()
// .then((me) => {
//     console.log('me: ', me)
// })
// .catch((error) => {
//     console.log('error: ', error)
// })