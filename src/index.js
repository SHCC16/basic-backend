import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db";

 
dotenv.config({
    path:'./env'
})


connectDB()













/*
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
})()

*/