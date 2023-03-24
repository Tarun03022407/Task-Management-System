const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  image: String,
  Designation: String,
});

const UserModel = mongoose.model("post", userSchema);

module.exports = { UserModel };
