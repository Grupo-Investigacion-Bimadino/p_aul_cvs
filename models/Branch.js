const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchSchema = mongoose.Schema({
  trunk: {
    type: Schema.Types.ObjectId,
    ref: "Trunk",
    required: true,
  },
  tag: [String],
  historyObjects: [],
  date_created: {
    type: Date,
    default: Date.now,
  },
  components: [
    {
      type: Schema.Types.ObjectId,
      ref: "Component",
    },
  ],
});

const Branch = mongoose.model("Branch", BranchSchema);
module.exports = Branch;
