import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  DesignationId: { type: String, required: true },
  FullName: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  Resume: { type: String, required: true },  // Store file path or URL
  Description: { type: String, required: true },
});

const Career = mongoose.models.Career || mongoose.model('Career', CareerSchema);

export default Career;
