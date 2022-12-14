const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const goalSchema = new Schema({
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
    user: [{type : mongoose.Schema.Types.ObjectId, ref: 'User'}],
  });


// Export model
module.exports = mongoose.model("Goal", goalSchema);
