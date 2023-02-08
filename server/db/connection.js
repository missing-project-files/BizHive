const { connect, set } = require('mongoose')

const connectDB = async () => {
    try {
        set('strictQuery', false)
        const conn = await connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`INFO: Connected to host: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB
