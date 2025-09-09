import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,   // hashed if local auth
    role: { type: String, default: "user" },  
    provider: { type: String, default: "local" }, // local, google, github
    providerId: String
}, { timestamps: true });

export default mongoose.model("User", userSchema);
