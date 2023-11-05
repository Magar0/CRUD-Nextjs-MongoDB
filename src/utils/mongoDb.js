import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Mongo DB");
    } catch (err) {
        console.log("Error: ", err);
    }
}

export default connectMongoDb;