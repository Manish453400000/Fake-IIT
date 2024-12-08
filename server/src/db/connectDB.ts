import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants";

export let dbInstance:string = '';
export const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    dbInstance = connectionInstance.connection.host;
    console.log(`\n☘️ MongoDB connected! Db host: ${dbInstance} \n`);
  }catch(err){
    console.log("MongoDB connection Error: ", err);
    process.exit(1);
  }
}