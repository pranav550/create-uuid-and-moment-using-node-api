const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uuid = require("node-uuid");
var moment = require("moment");
var now = moment();

const UserSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  created: {
    type: Array,
    default: now.format("YYYY MM DD")
  }
});

module.exports = mongoose.model("users", UserSchema);
