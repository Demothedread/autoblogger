import express from 'express';
import axios from 'axios';
import webflowClientMiddleware from '../middleware/webflowClientMiddleware.js';

const router = express.Router();

// Route to list all sites
router.get('/', webflowClientMiddleware, async (req, res) => {
  try {
    const sites = await req.webflow.sites();
    res.json(sites);
  } catch (error) {
    console.error('Error fetching sites:', error);
    res.status(500).send('Failed to fetch sites');
  }
});

// Additional site-related routes can go here

export default router;
