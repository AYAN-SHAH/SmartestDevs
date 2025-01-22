import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  categories: { type: String, required: true },
  image: { type: String, default: null },
  author: { type: String, default: 'admin' },
  publishedDate: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
