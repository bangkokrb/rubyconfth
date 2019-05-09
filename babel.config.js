const presets = [
  [
    '@babel/env',
    {
      targets: '> 0.25%, not dead',
      corejs: 2,
      useBuiltIns: 'entry'
    }
  ]
];

module.exports = { presets };
