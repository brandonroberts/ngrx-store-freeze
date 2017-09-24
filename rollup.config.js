export default {
  entry: './dist/es6/index.js',
  dest: './dist/bundles/ngrx-store-freeze.umd.js',
  format: 'umd',
  moduleName: 'ngrxStoreFreeze',
  external: [
    'deep-freeze-strict'
  ],
  context: 'window'
};
