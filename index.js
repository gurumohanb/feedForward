import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import feedbackRoutes from './routes/feedforward.js';
import Feedback from './models/feedforward.js'; // Adjust path if needed

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

  // GET /feedbacks - visible feedbacks only
app.get('/feedbacks', async (req, res) => {
    try {
      const feedbacks = await Feedback.find({ visible: false }).sort({ createdAt: -1 });
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch feedbacks' });
    }
  });
