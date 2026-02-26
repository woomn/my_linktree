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
      links: user.links || [],
      profileViews: user.profileViews || 0,
      emailClicks: user.emailClicks || 0,
      igClicks: user.igClicks || 0,
      facebookClicks: user.facebookClicks || 0,
      xClicks: user.xClicks || 0,
      youtubeClicks: user.youtubeClicks || 0,
      tiktokClicks: user.tiktokClicks || 0,
      githubClicks: user.githubClicks || 0,
      dailyViews: user.dailyViews || [],
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
