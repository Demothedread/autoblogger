import WebflowClient from 'webflow-api';
import getToken from './tokens.js';

const webflowClientMiddleware = async (req, res, next) => {
  try {
    const accessToken = await getToken('user');
    if (!accessToken) {
      console.log('Access token not found for user');
      return res.status(401).send('Access token not found');
    }

    req.webflow = new WebflowClient({ accessToken });
    next();
  } catch (error) {
    console.error('Error initializing Webflow client:', error);
    res.status(500).send('Failed to initialize Webflow client');
  }
};

export default webflowClientMiddleware;
