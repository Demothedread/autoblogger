import express from 'express';
const router = express.Router();

router.get('/auth', (req, res) => {
    const state = Math.random().toString(36).substring(7);
    const authUrl = `https://webflow.com/oauth/authorize?client_id=${process.env.WEBFLOW_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&state=${state}`;
    res.redirect(authUrl);
});

router.get('/callback', async (req, res) => {
    const { code } = req.query;

    try {
        const response = await axios.post('https://api.webflow.com/oauth/access_token', querystring.stringify({
            client_id: process.env.WEBFLOW_CLIENT_ID,
            client_secret: process.env.WEBFLOW_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.REDIRECT_URI
        }));

        const { access_token } = response.data;
        res.cookie('webflow_access_token', access_token, { httpOnly: true });
        res.redirect('/?authenticated=true');
    } catch (error) {
        console.error('Error getting access token:', error);
        res.status(500).send('Error getting access token');
    }
});

export default router;
