const package = require('../package.json') || {};



const _V_ = {

  name: package.name || 'Application_Name_Placeholder',
  description: package.description || 'Application Description Placeholder Text.',
  version: package.version || 'x.x.x',

  mode : process.env.NODE_ENV || 'production',
  isDev: false,

  stateManager: require('./state_manager'),

  sm2: require('./sm2'),

};

isDev = (_V_.mode.toLowerCase() !== 'production');

if (isDev) {
  _V_.isDev = isDev;
  console.log(_V_);
}



module.exports = _V_;
