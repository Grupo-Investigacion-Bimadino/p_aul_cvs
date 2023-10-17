const branches = require("./branches");
const tags = require("./tags");
const trunk = require("./trunk");
const versions = require("./bin/Versions");
const DataSchema = require("./bin/DataSchema");
const ModelsManager = require("./bin/ModelsManager");
const {
  diff,
  addedDiff,
  deletedDiff,
  updatedDiff,
  detailedDiff,
} = require("deep-object-diff");

const init = (data) =>
  new Promise((resolve, reject) => {
    // console.log("On init data", data);
    trunk
      .init(data)
      .then((d) => resolve(d))
      .catch((err) => reject(err));
  });

const diff_component = (new_component, old_component) =>
  new Promise(async (resolve, reject) => {
    // console.log("On diff new_component", new_component);
    // console.log("On diff old_component", old_component);

    // let diff_component = await diff(old_component, new_component);
    // let added_diff = await addedDiff(old_component, new_component);
    // let deleted_diff = await deletedDiff(old_component, new_component);
    // let updated_diff = await updatedDiff(old_component, new_component);
    let detailed_diff = await detailedDiff(old_component, new_component);
    if (detailed_diff.added || detailed_diff.deleted || detailed_diff.updated) {
      resolve(detailed_diff);
    } else {
      resolve(null);
    }
    /*await console.log(
      "{diff: ",
      JSON.stringify(diff_component),
      ",added_diff: ",
      JSON.stringify(added_diff),
      ",deleted_diff: ",
      JSON.stringify(deleted_diff),
      ",updated_diff: ",
      JSON.stringify(updated_diff),
      ",detailed_diff: ",
      JSON.stringify(detailed_diff),
      "}"
    );*/
  });

module.exports = {
  init,
  diff_component,
  branches,
  tags,
  versions,
  DataSchema,
  ModelsManager,
};
