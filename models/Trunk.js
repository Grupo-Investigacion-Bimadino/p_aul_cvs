const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrunkSchema = mongoose.Schema({
  name: String,
  description: String,
  type: String,
  status: {
    type: String,
    enum: ["active", "inactive", "deleted"],
    default: "active",
  },
  date_created: Date,
  historyObjects: [],
  autors: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  branches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Branch",
    },
  ],
});

const Trunk = mongoose.models.Trunk || mongoose.model("Trunk", TrunkSchema);
module.exports = Trunk;
