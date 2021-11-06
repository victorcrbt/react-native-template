const { compilerOptions } = require('./tsconfig.json');

const { baseUrl, paths } = compilerOptions;

const mappedPaths = {};

Object.entries(paths).forEach(([key, value]) => {
  mappedPaths[key.replace('/*', '')] = `./src/${value[0]
    .replaceAll('*', '')
    .replaceAll('./', '')}`;
});

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: [`./${baseUrl}`],
        alias: mappedPaths,
      },
    ],
  ],
};
