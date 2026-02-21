const User = require("../models/user");
const jwt = require("jsonwebtoken");

const dashboardData = async (req, res) => {
  const { tokenMail } = req.body;

  try {
    if (!tokenMail) {
      return res.json({
        status: "error",
        message: "No token",
      });
    }

    // verify token
    const decoded = jwt.verify(tokenMail, process.env.SECRET_JWT);

    const email = decoded.email;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }

    const userData = {
      name: user.name,
      role: user.role,
      bio: user.bio,
      avatar: user.avatar,
      handle: user.handle,
      links: user.links?.length || 0,
    };

    return res.json({
      status: "okay",
      message: "User loaded",
      userData,
    });
  } catch (err) {
    console.log("Dashboard error:", err);

    return res.json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = { dashboardData };
