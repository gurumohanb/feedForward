import express from 'express';
import Feedback from '../models/feedforward.js';

const router = express.Router();

// POST /api/feedback
router.post('/', async (req, res) => {
  try {
    const { sender, recipient, top, tip } = req.body;
    const feedback = new Feedback({ sender, recipient, top, tip });
    await feedback.save();
    res.status(200).json({ message: 'Feedback saved successfully',data:'Success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

export default router;
