const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectCVSchema = mongoose.Schema({
  description: String,
  template: {
    type: Schema.Types.ObjectId,
    ref: "Form",
  },
  trunk: {
    type: Schema.Types.ObjectId,
    ref: "Trunk",
  },
  Tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  branchs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Branch",
    },
  ],
});

const ProjectCV = mongoose.models.ProjectCV || mongoose.model("ProjectCV", ProjectCVSchema);
module.exports = ProjectCV;
