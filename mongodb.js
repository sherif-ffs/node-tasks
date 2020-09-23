// CRUD 
const chalk = require('chalk')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID }  = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log(chalk.red('unable to connect'))
    }

    console.log(chalk.green('Connected correctly'))

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("5f68e57a855fb0103e12b8ec")}, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch user')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 22}).toArray((error, users) => {
    //     console.log('users: ', users)
    // })

    // db.collection('tasks').findOne(({_id: new ObjectID("5f697dcb59daf7263f915d34")}, (error, task) => {
    //     if (error) {
    //         return console.log('error')
    //     }

    //     console.log(task)
    // }))

    db.collection('tasks').find({done: false}).toArray((error, tasks) => {
        if (error) {
            return console.log(chalk.red('error', error))
        }

        console.log(tasks)
        console.log(chalk.greenBright(tasks.length))
    })

})


