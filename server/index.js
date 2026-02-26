const express = require('express');
const cors = require("cors");
const application = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { registerUser, loginUser } = require('./controllers/auth');
const { dashboardData } = require('./controllers/dashboard');
const { getUserData, getUserSocials, trackClick, trackLinkClick } = require('./controllers/getUserdata');
const { saveSocials, saveProfile, saveLinks } = require('./controllers/saveItems');
const { loadSocials, loadLinks } = require("./controllers/loadPrevious");
require('dotenv').config();

application.use(cors({
    origin: ["https://my-linktree-kfnw.vercel.app", "http://localhost:3000"],
    credentials: true
}));
application.use(express.json({ limit: '10mb' }));
application.use(express.urlencoded({ limit: '10mb', extended: true }));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connected")
}).catch(err => { console.log(err.message) });

application.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`);
})

application.post('/api/register', registerUser);
application.post('/api/login', loginUser);

application.post('/data/dashboard', dashboardData);

// application.get("/get/social/:handle", getUserSocials);
application.get('/get/:handle', getUserData);
application.post('/api/track/:handle', trackClick);
application.post('/api/track/link/:handle', trackLinkClick);
application.post('/save/socials', saveSocials);
application.post('/save/profile', saveProfile);
application.post('/save/links', saveLinks);
application.post('/load/socials', loadSocials);
application.post('/load/links', loadLinks);

const port = process.env.PORT || 8080;

application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})