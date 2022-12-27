const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/connection.js')
const cors = require('cors')

const app = express()
app.use(express.json())

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

console.log('INFO: NODE_ENV:' + process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.dev' })
    app.use(cors())
} else {
    config({ path: '.env.prod' })
    app.use(secure)
}

connectDB()

app.use('/api/auth', require('./routes/auth'))

app.listen(
    process.env.PORT,
    console.log(`INFO: Backend listening on port ${process.env.PORT}`)
)
