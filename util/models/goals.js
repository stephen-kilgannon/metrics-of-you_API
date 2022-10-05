const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GoalsSchema = new Schema({
    title: String,
    type: String,
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    user: String,
  });


// Export model
module.exports = mongoose.model("User", GoalsSchema);
