const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);
  try {
    const defaultLinks = {
      url: "typefinance.com",
      title: "TypeFinance",
      icon: "",
    };
    const user = await User.create({
      handle,
      email,
      password,
      role: category,
      links: [defaultLinks],
    });
    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    console.log("user", user);
    return res.json({
      message: "user created",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (err) {
    if (err.code === "11000") {
      return res.json({
        message: "Try different handle or email",
        status: "error",
      });
    }
    return res.json({ message: err.message, status: "error" });
  }
};

const loginUser = (req, res) => {
  res.send(`login from callback`);
};

module.exports = { registerUser, loginUser };
