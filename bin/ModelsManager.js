const ds = require("./DataSchema");

/**
 *
 * @param {*} modelData model name and data model
 * @returns ids of the inserted items
 */

const setModel = (modelData) =>
  new Promise((resolve, reject) => {
    let self = this;
    try {
      let { template, name, data } = modelData;
      name = name.charAt(0).toUpperCase() + name.slice(1);

      ds.parserFieldForSchema(template, name).then((schema) => {
        const Model = require(`../models/${name}`);

        Model.insertMany(data)
          .then(function (items) {
            let ids = items.map((a) => a._id);
            res.send({ status: 200, ids });
          })
          .catch(function (err) {
            res.send({ status: 500, err });
          });
      });
    } catch (error) {
      res.send({ status: 200, error });
    }
  });

module.exports = {
  setModel,
};
