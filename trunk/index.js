const control_version = require("../bin/Versions");
const Trunk = require("../models/Trunk");
const mongoose = require("mongoose");
const branches = require("../branches");
// const Branch = require("../models/Branch");

const init = (data) =>
  new Promise(async (resolve, reject) => {
    let { version, name, components, description, type, _id, team, keywords } =
      data;
    // let source = sources[0];
    let v = "0.0.0";
    let t = "major";
    // let name = source.title;
    // let description = source.detail;
    // let type = "form";
    // let status = "active";

    try {
      let historyObjects = await control_version.historyObject(
        v,
        t,
        { _id: _id },
        { components }
      );
      // console.log("historyObjects", historyObjects);
      let id_branch = mongoose.Types.ObjectId();
      Trunk.create(
        {
          name,
          description,
          type,
          date_created: Date(),
          historyObjects,
          autors: [team],
          branches: [id_branch],
        },
        (err, t) => {
          if (err) {
            reject(err);
          } else {
            let new_branch = {
              _id: id_branch,
              trunk: t._id,
              tag: keywords,
              historyObjects: historyObjects,
              components: components,
            };
            branches
              .init(new_branch)
              .then((b) => {
                resolve(t);
              })
              .catch((err) => reject(err));
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });

module.exports = { init };
