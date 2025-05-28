import mongoose from "mongoose";
import shortid from "shortid";

const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortid.generate
  },
  clicks: {
    type: Number,
    default: 0
  }
});

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;