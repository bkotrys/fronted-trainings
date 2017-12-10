import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import sassImporter from 'node-sass-package-importer';
import sassLint from 'rollup-plugin-sass-lint';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint-fixed';

const env = process.env.NODE_ENV;
const production = env === 'production';
const linterShouldFail = production;
const bundleFileName = 'bundle';
const plugins = [
  commonjs(),
  resolve(),
  scss({
    output: true,
    insert: false,
    outputStyle: production ? 'compressed' : 'expanded',
  }),
  typescript({
    clean: true,
    cacheRoot: '.ts_cache',
    abortOnError: true
  }),
  tslint({
    throwError: linterShouldFail,
    exclude: [
      'node_modules/**',
      'build/**',
      '**/*.scss'
    ],
    include: 'src/**/*.ts'
  }),
];

export default {
  entry: 'src/js/app.ts',
  dest: `build/${bundleFileName}.js`,
  format: 'umd',
  sourceMap: true,
  globals: {
    jquery: 'window.jQuery',
  },
  external: ['jquery'],
  plugins,
};
