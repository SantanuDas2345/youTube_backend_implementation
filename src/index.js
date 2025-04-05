import dotenv from 'dotenv'
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js";
import dbConnect from './db/db.js'

dotenv.config({
    path: '/.env'
})

dbConnect();
// ;(async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }
//     catch(error) {
//         console.log("error", console.error();
//         throw err
//         );
        
//     }
// })()