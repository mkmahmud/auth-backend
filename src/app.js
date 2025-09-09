// src/app.js
import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; 

// Initialize app
const app = express();

// Middleware
app.use(express.json());  // Body parser for JSON requests
app.use(cors());  // Enable cross-origin requests
app.use(passport.initialize());  // Initialize passport for Google OAuth

// Routes
app.use("/auth", authRoutes); 

app.get("/", (req, res) => {
    res.send("Welcome to the Auth Server");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

export default app;
