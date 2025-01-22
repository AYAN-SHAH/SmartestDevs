import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  JobTitle: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  CompanyName: { type: String, required: true },
  Website: { type: String, required: true },
  NoOfEmployee: { type: String, required: true },
  YearsInBusiness: { type: String, required: true },
  Budget: { type: String, required: true },
  TimeLine: { type: String, required: true },
  Description: { type: String, required: true },
});

const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);

export default Quote;
