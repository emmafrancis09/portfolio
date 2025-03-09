import mongoose, { model, models } from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export default models.Portfolio || model("Portfolio", PortfolioSchema);
