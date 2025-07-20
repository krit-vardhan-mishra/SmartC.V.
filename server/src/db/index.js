import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB CONNECTED : Connected to MongoDB Successfully Listening on - ${connectionInstance.connection.host}`);
        // console.log("connection instance => ", connectionInstance);// for knowledge only
        
    } catch (error) {
        console.error("Can't connect DB : conneconnecting to MongoDB failed:", error);
        process.exit(1);
    }
};

export default connectDB;