const presets = [
  [
    "@babel/env",
    {
      targets: "> 0.25%, not dead",
      useBuiltIns: "entry"
    }
  ]
];

module.exports = { presets };
