import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        // For cloud MongoDB, URI already includes database name
        // For local MongoDB, we need to append database name
        let mongoURI = process.env.MONGODB_URI;
        
        // Only append database name for local MongoDB
        if (mongoURI.startsWith('mongodb://localhost')) {
            mongoURI = `${mongoURI}/${DB_NAME}`;
        }
        
        const connectionInstance = await mongoose.connect(mongoURI);
        console.log(`\n MONGODB CONNECTED : Connected to MongoDB Successfully Listening on - ${connectionInstance.connection.host}`);
        // console.log("connection instance => ", connectionInstance);// for knowledge only
        
    } catch (error) {
        console.error("Can't connect DB : connecting to MongoDB failed:", error);
        process.exit(1);
    }
};

export default connectDB;