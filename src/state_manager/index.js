const stateManager = {};

/*
 * Hooking Classes and objects like -> V_BASE and vComponents
 */
const { V_Base, v_components } = require("./core");

stateManager.V_Base = V_Base;
stateManager.v_components = v_components;


const helpers = require("./helpers");
stateManager.helpers = helpers;


module.exports = stateManager;
