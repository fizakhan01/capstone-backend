const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup
exports.register = async (req, res) => {
  console.log("BODY:", req.body);

  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "Register successful",
    });
  } catch (error) {
    console.error("Register Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    console.log("Login Request:", req.body);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    console.log("User Found:", user.email);

    const match = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Password Match:", match);

    if (!match) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};