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

    db.collection('users').updateOne({
        _id: new ObjectID("5f68e57a855fb0103e12b8ec")
    }, {
        $set: {
            name: 'Samuel'
        }
    }).then((result) => {
        console.log('result: ', result)
    }).catch((error) => {
        console.log('error: ', error)
    })

    db.collection('tasks').updateMany(
        { },
        {
            $set: {
                done: true
            }
        }
    ).then((result) => {
        console.log('result: ', result)
    }).catch((error) => {
        console.log('error: ', error)
    })

})


