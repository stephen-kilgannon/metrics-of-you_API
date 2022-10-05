const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  skills: [String],
});


userSchema.statics.findByName = function(name){
  return this.where({name: new RegExp(name,"i")})
}

userSchema.statics.findByID = function(id){
  return this.findByID(id)
}


// Export model
module.exports = mongoose.model("User", userSchema);
