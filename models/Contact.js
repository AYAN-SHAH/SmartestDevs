import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
