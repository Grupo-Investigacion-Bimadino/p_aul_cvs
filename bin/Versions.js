const {
  createHistoryObject,
  restoreHistoryObject,
} = require("../json-version-control");

var generateVersion = function (v, type) {
  let axis = v.split(".");

  if (axis.length > 1) {
    axis[0] = Number(axis[0]);
    axis[1] = Number(axis[1]);
    axis[2] = Number(axis[2]);
  } else {
    axis[0] = Number(v);
    axis[1] = 0;
    axis[2] = 0;
  }

  switch (type) {
    case "major":
      axis[0] = axis[0] + 1;
      break;
    case "minor":
      axis[1] = axis[1] + 1;
      break;
    case "patch":
      axis[2] = axis[2] + 1;
      break;
  }
  return axis.join(".");
};

var historyObject = async function (v, type, firstVersion, secondVersion) {
  history = await createHistoryObject(
    generateVersion(v, type),
    firstVersion,
    secondVersion
  );

  return history;
};

var restoredPredecessor = function (historyObjects, currentObject, options) {
  //const options = { considerVersionNumbers: true };
  restoreHistoryObject(historyObjects, currentObject, options);
};

module.exports = {
  historyObject,
  restoredPredecessor,
};
