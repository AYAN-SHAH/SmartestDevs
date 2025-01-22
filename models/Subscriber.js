import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phoneNumber1: {
    type: String,
    required: true,
  },
  phoneNumber2: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    required: true,
  },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);

export default Subscriber;
