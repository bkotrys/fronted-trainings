import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import sassImporter from 'node-sass-package-importer';
import sassLint from 'rollup-plugin-sass-lint';
import eslint from 'rollup-plugin-eslint';

import commonjs from 'rollup-plugin-commonjs';

const env = process.env.NODE_ENV;
const production = env === 'production';
const linterShouldFail = production;
const bundleFileName = 'bundle';
const plugins = [
  eslint({
    throwError: linterShouldFail,
  }),
  sassLint({
    failOnError: linterShouldFail,
  }),
  commonjs(),
  resolve(),
  scss({
    output: true,
    insert: false,
    outputStyle: production ? 'compressed' : 'expanded',
  }),
  babel({
    exclude: 'node_modules/**',
  })
];

export default {
  entry: 'src/js/app.js',
  dest: `build/${bundleFileName}.js`,
  format: 'umd',
  sourceMap: true,
  plugins,
};
