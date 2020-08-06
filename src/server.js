const express = require('express')

const { db } = require('./db/models')

const app = express()


db.sync()
    .then(()=>{
        app.listen(6969,() =>{
            console.log('server started on http://localhost:6969')
        })
})
    .catch((err)=>{
        console.error(new Error('Database start nhi ho rha'))
        console.error(err)
})

