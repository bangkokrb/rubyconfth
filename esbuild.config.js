const build = require("./config/esbuild.defaults.js");

// Update this if you need to configure a destination folder other than `output`
const outputFolder = "output";

const esbuildOptions = {
  entryPoints: [
    "frontend/javascript/application.js",
    "frontend/javascript/error.js"
  ],
  format: "esm"
};

build(outputFolder, esbuildOptions);
