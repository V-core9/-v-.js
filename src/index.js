const packageInfo = require('../package.json') || {};



const _V_ = {

  name: packageInfo.name || 'Application_Name_Placeholder',
  description: packageInfo.description || 'Application Description Placeholder Text.',
  version: packageInfo.version || 'x.x.x',

  mode : process.env.NODE_ENV || 'production',

  stateManager: require('./state_manager'),

};

isDev = () => (_V_.mode.toLowerCase() !== 'production');

if (isDev) {
  console.log(_V_);
}


module.exports = _V_;
