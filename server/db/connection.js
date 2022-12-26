import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`INFO: Connected to host: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;