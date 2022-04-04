/*
 ? Base Thing Declaration [ stateManager = {} ]
 */
const stateManager = {};

/*
 * 2nd Part of Main things
 * Hooking Classes and objects like -> V_BASE and vComponents
 */
const core = require("./core");

stateManager.V_Base_Component = core.V_Base;
stateManager.v_components = core.v_components;

/*
 ! EOF - 2ND ]
 */

/*
 ! Helpers like printter and clickExec
 */
const helpers = require("./helpers");

stateManager.clickExec = helpers.clickExec;
stateManager.printButton = helpers.printButton;

/*
 ! EOF - 3RD ]
 */

module.exports = stateManager;
