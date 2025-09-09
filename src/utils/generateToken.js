import jwt from "jsonwebtoken";
import config from "../config/index.js";

export const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role, email: user.email },
        config.JWT_SECRET,
        { expiresIn: "1d" }
    );
};
