const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const db = process.env.MONGO_DB_URI;

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error in connecting with database');
    }
}


module.exports = connectToMongoDB;