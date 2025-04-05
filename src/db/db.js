import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const dbConnect = async ()=> {
    try {
        const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connection successful at ${dbConnection}`);
    }
    catch(error) {
        console.log("database connection failed", error);
        process.exit(1)
        
    }
}
export default dbConnect;