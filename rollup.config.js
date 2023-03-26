import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';
import multiInput from 'rollup-plugin-multi-input';

import pkg from './package.json';

const name = 'q-ui-icon';
const externalDeps = Object.keys(pkg.peerDependencies).concat([/@babel\/runtime/]);
const banner = `/**
 * ${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */
`;

const getPlugins = () => {
  const plugins = [
    multiInput(),
    vuePlugin(),
    esbuild({
      target: 'esnext',
      minify: false,
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.vue'],
    }),
    json(),
    replace({
      preventAssignment: true,
      values: {
        __VERSION__: JSON.stringify(pkg.version),
      },
    }),
  ];

  return plugins;
};

const esConfig = {
  input: ['src/*/*.vue', 'src/index-es.js'],
  external: externalDeps,
  plugins: getPlugins(),
  output: {
    banner,
    dir: 'es/',
    format: 'esm',
  },
};

const cjsConfig = {
  input: ['src/*/*.vue', 'src/index.js'],
  external: externalDeps,
  plugins: getPlugins(),
  output: {
    banner,
    dir: 'lib/',
    format: 'cjs',
    exports: 'named',
  },
};

export default [esConfig, cjsConfig];
