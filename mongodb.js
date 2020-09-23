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

    // db.collection('users').deleteMany({
    //     age: 30,
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteMany({
        title: 'Task Three',
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})


