import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  res.json({ token: generateToken(user), user: { _id: user._id, name: user.name, email: user.email } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // If user not exist
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ token: generateToken(user), user: { _id: user._id, name: user.name, email: user.email } });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
