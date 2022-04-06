const path = require('path');

module.exports = {
  entry: path.join(__dirname,'./index.js'),
  mode: (process.env.NODE_ENV == undefined || process.env.NODE_ENV == 'production') ? 'production' : 'development',
  target: ['web'],
  output: {
    filename: 'demo.js',
    path: path.join(__dirname, '.'),
  },
};
