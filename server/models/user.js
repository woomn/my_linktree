const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: 'https://cdn-icons-png.flaticon.com/128/847/847969.png' },
    password: { type: String, required: true },
    role: { type: String, enum: ['Creator', 'Brand', 'Agency', 'admin'], default: 'Creator' },
    handle: { type: String, required: true, unique: true },
    theme: { type: String, default: 'default' },
    links: [{
        url: { type: String },
        title: { type: String },
        icon: { type: String },
        clicks: { type: Number, default: 0 }
    }],
    socialMedia: {
        facebook: { type: String },
        x: { type: String },
        instagram: { type: String },
        youtube: { type: String },
        tiktok: { type: String },
        github: { type: String },
        email: { type: String }
    },
    profileViews: { type: Number, default: 0 },
    dailyViews: [{
        date: { type: String },
        views: { type: Number, default: 0 }
    }],
    emailClicks: { type: Number, default: 0 },
    igClicks: { type: Number, default: 0 },
    facebookClicks: { type: Number, default: 0 },
    xClicks: { type: Number, default: 0 },
    youtubeClicks: { type: Number, default: 0 },
    tiktokClicks: { type: Number, default: 0 },
    githubClicks: { type: Number, default: 0 }
}, { collection: 'users-data-linktree' });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;