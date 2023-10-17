const mongoose = require("mongoose");
fs = require("fs");

const getSchema = (fields, name) => {
  let schema =
    'const mongoose = require("mongoose");\n' +
    "const Schema = mongoose.Schema;\n \n" +
    `const ${name}Schema = new Schema({` +
    fields +
    "\n});\n \n" +
    `var ${name} = mongoose.model("${name}", ${name}Schema);\n` +
    `module.exports = ${name};`;
  return schema;
};

const parserFieldForSchema = (template, name) =>
  new Promise((resolve, reject) => {
    temp = JSON.parse(template);
    let result = {};
    var fields = "";

    try {
      for (const p in temp) {
        switch (temp[p]) {
          case "ObjectId":
            fields += "";
          case "textoAutogenerado":
            fields += `\n ${p}:{` + " type: String," + ' default: "",' + "}, ";
            break;
          case "textoVacio":
            fields += `\n ${p}:{` + " type: String," + ' default: "",' + "}, ";
            break;
          case "textoArchivo":
            fields += `\n ${p}:{` + " type: String," + ' default: "",' + "}, ";
            break;
          case "arregloVacio":
            fields += `\n ${p}:{` + " type: Array," + " default: []," + "}, ";
            break;
          default:
            fields += "";
            break;
        }
      }
    } catch (error) {
      throw error;
    } finally {
      let file = getSchema(fields, name);

      fs.writeFile(`./bin/carina/models/${name}.js`, file, function (err) {
        if (err) reject(err);
        console.log("Esquema guardado");
        resolve(file);
      });
    }
  });

module.exports = {
  parserFieldForSchema,
};
