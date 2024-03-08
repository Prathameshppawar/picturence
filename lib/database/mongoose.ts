import mongoose, {Mongoose} from "mongoose";
import { cache } from "react";

const MONGODB_URL= process.env.MONGODBURL;
interface MongooseConnection{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}
console.log('CALLED FOR CONNECTIONS')
let cached: MongooseConnection= (global as any).mongoose

if(!cached){
    cached: (global as any).mongoose= {
        conn: null, promise: null
    }
}


export const connectToDatabase= async()=>{
    if(cached.conn) return cached.conn;
    if(!MONGODB_URL) throw new Error('Missing mongourl');

    cached.promise= 
        cached.promise || 
        mongoose.connect(
            MONGODB_URL, {
            dbName: 'picturence', bufferCommands: false
        }) 

    cached.conn= await cached.promise
    console.log(cached)
    return cached.conn;
}