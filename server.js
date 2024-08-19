import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js';
import JWT from "jsonwebtoken";
import cors from 'cors';

const app = express();

connectDB();
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoute)

dotenv.config()
const port = process.env.PORT;

app.get('/',(req, res)=>{
    res.send({
        message:'Welcome to the MERN E-Commerce app'
    })
});

app.listen(port, ()=>{
    console.log(`it's running on port ${port}`.bgWhite.green)
});