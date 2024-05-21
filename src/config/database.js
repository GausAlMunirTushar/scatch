const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONGODB_URI,
        );
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDatabase;
