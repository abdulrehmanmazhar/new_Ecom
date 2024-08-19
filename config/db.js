import mongoose  from "mongoose";
import colors from "colors";
import dotenv from 'dotenv';

dotenv.config()

const URL = process.env.MONGO_URL;

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(URL);
        console.log('DB connected successfully'.bgGreen.white)
    } catch (error) {
        console.log(`Error connection DB ${error}`.bgRed.white)
    }
};

export default connectDB