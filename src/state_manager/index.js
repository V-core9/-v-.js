const stateManager = {};

/*
 * Hooking Classes and objects like -> V_BASE and vComponents
 */
const core = require("./core");

stateManager.V_Base_Component = core.V_Base;
stateManager.v_components = core.v_components;


/*
 ? Helpers like printter and clickExec
 */
const helpers = require("./helpers");
stateManager.helpers = helpers;


module.exports = stateManager;
