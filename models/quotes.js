const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuotesSchema = new Schema({
  content: { 
    type: String,
    trim: true, 
    required: [true, "Please enter the quote!"]
  },

  author: { 
    type: String,
    trim: true, 
    required: [true, "Please enter a an author! (Unknown if unknown)"]
  }
});

const Quotes = mongoose.model("Quotes", QuotesSchema);

module.exports = Quotes;