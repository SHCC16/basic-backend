import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB= async ()=>{
    try{

       const connect= await mongoose.connect(`${process.env.MONGODB_URI}
            /${DB_NAME}`)
            console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("MONGO ERROR",error);
        process.exit(1)
    }
}


export default connectDB