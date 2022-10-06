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
  goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goal' }]
});


userSchema.statics.findByName = function(name){
  return this.where({name: new RegExp(name,"i")})
}

userSchema.statics.findByID = function(id){
  return this.findByID(id)
}

userSchema.statics.getUserGoals = function(id){
 return  this.findByID(id)
}


userSchema.statics.addGoal = function(user,goal) {
  return this.updateOne({name: user},{$set: {goals : goal}});
}

// Export model
const User  = mongoose.model("User", userSchema);

module.exports ={
  User : User,
}
