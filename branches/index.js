const Branch = require("../models/Branch");

const init = (branch) =>
  new Promise((resolve, reject) => {
    Branch.create(branch, (err, nb) => {
      if (err) {
        reject(err);
      } else {
        resolve(nb);
      }
    });
  });

module.exports = { init };
