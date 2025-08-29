import mongoose from 'mongoose'

// for connecting to the database in local
// const URI = "mongodb://127.0.0.1:27017/mern_admin"

// mongoose.connect(URI)


const URI = process.env.MONGODB_URI;


const connectdb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to database");
    } catch (error) {
        console.error("error while connecting to database");
        process.exit(0);
    }
};

export default connectdb;
 