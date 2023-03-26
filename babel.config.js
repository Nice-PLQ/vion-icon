export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            'Android >= 10.0',
            'iOS >= 10.0'
          ]
        }
      }
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
};
