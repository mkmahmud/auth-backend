import express from "express";
import passport from "passport";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",
    passport.authenticate("google", { session: false }),
    
    (req, res) => {
        // send JWT token after Google login
        res.json({ token: generateToken(req.user), user: req.user });
    }
);

export default router;
