/*
 ? Base Thing Declaration [ stateManager = {} ]
 */
const stateManager = {};

/*
 * 2nd Part of Main things
 * Hooking Classes and objects like -> V_BASE and vComponents
 */
const { V_Base, vComponents } = require("./core");

stateManager.V_Base = V_Base;
stateManager.vComponents = vComponents;

/*
 ! EOF - 2ND ] 
 */

/*
 ! Helpers like printter and clickExec
 */
const { clickExec, printButton } = require("./helpers");

stateManager.clickExec = clickExec;
stateManager.printButton = printButton;

/*
 ! EOF - 3RD ]
 */

module.exports = stateManager;
