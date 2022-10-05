const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    email: {
      type: String,
          trim: true,
          lowercase: true,
          unique: true,
          validate: {
              validator: function(v) {
                  // eslint-disable-next-line no-useless-escape
                  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
              },
              message: "Please enter a valid email"
          },
          required: [true, "Email required"]
    },
    password: String,
  });

// Export model
module.exports = mongoose.model("Login", loginSchema);
