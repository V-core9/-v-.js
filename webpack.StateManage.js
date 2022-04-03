const path = require('path');

module.exports = {
  entry: './src/state_management/EXAMPLE/index.js',
  mode: (process.env.NODE_ENV == undefined || process.env.NODE_ENV == 'production') ? 'production' : 'development',
  target: ['web'],
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'src/state_management/EXAMPLE'),
  },
};
