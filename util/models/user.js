const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  createdAt: {
    type: Date,
    immutable: true,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  skills: [String],
});


// Export model
module.exports = mongoose.model("User", userSchema);
