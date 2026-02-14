const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    avatar: { type: String,  default: 'https://cdn-icons-png.flaticon.com/128/847/847969.png'},
    password: { type: String, required: true },
    role: { type: String, enum: ['Creator', 'Brand', 'Agency', 'admin'], default: 'Creator' },
    handle: { type: String, required: true, unique: true },
    links: [{
        url: { type: String },
        title: { type: String },
        icon: { type: String }
    }],
    socialMedia: {
        facebook: { type: String },
        twitter: { type: String },
        instagram: { type: String },
        youtube: { type: String },
        github: { type: String }
    }
}, { collection: 'users-data-linktree' });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;