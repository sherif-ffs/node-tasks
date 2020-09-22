// CRUD 
const chalk = require('chalk')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID }  = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log(chalk.red('unable to connect'))
    }

    console.log(chalk.green('Connected correctly'))

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Sherif', 
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user')
    //     }

    //     console.log('result.ops: ', result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: 'Eric', 
            age: 30
        }, {
            name: 'Steve',
            age: 2
        }
    ], (error, result) => {
        if (error) {
            console.log(error)
            return console.log('unable to insert user')
        }

        console.log('result.ops: ', result.ops)
    })

    db.collection('tasks').insertMany([
        {
            title: 'Task One',
            done: false
        }, 
        {
            title: 'Task Two',
            done: true
        }, 
        {
            title: 'Task Three',
            done: false
        }
    ], (error, result) => {
        if (error) {
            console.log(error)
            return console.log('unable to insert tasks')
        }

        console.log('result.ops: ', result.ops)
    })
})


