// server.js
import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/index.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(config.SERVER_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);  // Exit the process with failure
    }
};

connectDB();

// Start the server
app.listen(config.PORT || 5000, () => {
    console.log(`Server running on port ${config.PORT || 5000}`);
});
