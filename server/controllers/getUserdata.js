const User = require('../models/user')

const getUserData = async (req, res) => {
    const handle = req.params.handle;
    try {
        const today = new Date().toISOString().split('T')[0];
        const user = await User.findOneAndUpdate(
            { handle: handle },
            { $inc: { profileViews: 1 } },
            { new: true }
        )
        if (user) {
            const todayView = user.dailyViews.find(v => v.date === today);
            if (todayView) {
                todayView.views += 1;
            } else {
                user.dailyViews.push({ date: today, views: 1 });
            }
            await user.save();
        }
        console.log(user);
        const userData = {
            name: user.name,
            avatar: user.avatar,
            bio: user.bio,
            links: user.links,
            handle: user.handle,
            theme: user.theme
        }
        const socials = user.socialMedia;
        return res.json({ message: 'found', userData, socials, status: 'success' })
    } catch (err) {
        console.log(err);
        return res.json({ status: 'error', error: err.message });
    }
}

const getUserSocials = async (req, res) => {
    const handle = req.params.handle;
    try {
        console.log(handle);
        const user = await User.findOne({ handle: handle });
        const socials = user.socialMedia;
        return res.json({ message: 'found', socials, status: 'success' })
    } catch (err) {
        return res.json({ starus: 'error', error: err.message });
    }
}

const trackClick = async (req, res) => {
    const handle = req.params.handle;
    const { type } = req.body;
    try {
        if (type === 'email') {
            await User.updateOne({ handle: handle }, { $inc: { emailClicks: 1 } });
        } else if (type === 'ig') {
            await User.updateOne({ handle: handle }, { $inc: { igClicks: 1 } });
        } else if (type === 'facebook') {
            await User.updateOne({ handle: handle }, { $inc: { facebookClicks: 1 } });
        } else if (type === 'x') {
            await User.updateOne({ handle: handle }, { $inc: { xClicks: 1 } });
        } else if (type === 'youtube') {
            await User.updateOne({ handle: handle }, { $inc: { youtubeClicks: 1 } });
        } else if (type === 'tiktok') {
            await User.updateOne({ handle: handle }, { $inc: { tiktokClicks: 1 } });
        } else if (type === 'github') {
            await User.updateOne({ handle: handle }, { $inc: { githubClicks: 1 } });
        }
        return res.json({ message: 'tracked', status: 'success' });
    } catch (err) {
        return res.json({ status: 'error', error: err.message });
    }
}

const trackLinkClick = async (req, res) => {
    const handle = req.params.handle;
    const { linkId } = req.body;
    try {
        await User.updateOne(
            { handle: handle, "links._id": linkId },
            { $inc: { "links.$.clicks": 1 } }
        );
        return res.json({ message: 'link tracked', status: 'success' });
    } catch (err) {
        return res.json({ status: 'error', error: err.message });
    }
}

module.exports = { getUserData, getUserSocials, trackClick, trackLinkClick };