module.exports = {
  index: {
    entry: 'src/entry/index.js',
    template: 'public/index.html',
    title: 'Web broadcast service',
    chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
  },
  'about': {
    entry: 'src/entry/about.js',
    template: 'public/index.html',
    title: 'About WBCS',
    chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
  },
};
