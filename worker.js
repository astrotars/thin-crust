'use strict'

const Chance    = require('chance'),
      MongoDB   = require('mongodb').MongoClient

let url = process.env.MONGODB_CONNECTION_STRING

setInterval(function() {

    let chance = new Chance(),
        street = chance.street(),
        driver = 'Nick'

    MongoDB.connect(url, function(err, db) {

        if (err) {
            console.log(err)
            process.exit(0)
        }

        let collection = db.collection('messages')

        let document = {
            driver: driver,
            street: street,
        }

        collection.save(document, { w: 1 }, function(err, doc) {

            if (err) {
                console.log(err)
                process.exit(0)
            }

            let saved = doc.ops[0]

            console.log(`${saved._id}: ${saved.driver} is currently on ${saved.street}.`)

            db.close()

        })

    })

}, 30000)
