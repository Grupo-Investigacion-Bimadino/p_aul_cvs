const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = mongoose.Schema({});

const Tag = mongoose.model("Tag", TagSchema);
module.exports = Tag;
