import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  top: { type: String, required: true },
  tip: { type: String, required: true },
  visible: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Feedback', FeedbackSchema);
