import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user: String,
  tour: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  price: Number,
});

export default mongoose.model('Purchase', schema);
