const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);
  try {
    const defaultLinks = {
      url: "My-Linktree.com",
      title: "My Linktree",
      icon: "/svg/logo.svg",
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

// controllers/auth.js

const loginUser = async (req, res) => { // 1. ต้องมี async ตรงนี้
  const { email, password } = req.body;
  try {
    // 2. ต้องมี await เพื่อรอให้ Database หาของให้เสร็จก่อน
    // ถ้าหาไม่เจอ หรือรหัสไม่ตรง มันจะได้ค่า null
    const user = await User.findOne({ email: email, password: password });
    
    console.log("User found:", user); // ลอง log ดู ถ้าไม่เจอต้องเป็น null

    if (!user) {
      // 3. ถ้า user เป็น null (หาไม่เจอหรือรหัสผิด) ให้ส่ง status: 'not found'
      return res.json({ status: 'not found', error: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    return res.json({ message: 'user found', status: 'success', token: token, id: user._id });
  } catch (err) {
    return res.json({ message: err.message, status: 'error' });
  }
};

module.exports = { registerUser, loginUser };
