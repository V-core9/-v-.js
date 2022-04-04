const packageInfo = require('../package.json') || {};


const _V_ = {

  name: packageInfo.name || 'Application_Name_Placeholder',
  description: packageInfo.description || 'Application Description Placeholder Text.',
  version: packageInfo.version || 'x.x.x',

  stateManager: require('./state_manager'),

};


if (process.env.NODE_ENV !== 'production') console.log(_V_);


module.exports = _V_;
