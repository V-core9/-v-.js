/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./__tests__/Examples/Demo_01/components/classes/App_Footer.class.js":
/*!***************************************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/classes/App_Footer.class.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { v_components, V_Base } = __webpack_require__(/*! ../../../../../src/state_manager */ \"./src/state_manager/index.js\");\r\n\r\nmodule.exports = class V_App_Footer extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    // Just to be able to navigate it easier [id]\r\n    props.id = props.id || \"V_App_Footer\";\r\n    props.data = props.data || true;\r\n\r\n    super(props);\r\n\r\n\r\n    this.meth = {\r\n\r\n      blur: async () => {\r\n        await this.state(false);\r\n      },\r\n\r\n      focus: async () => {\r\n        await this.state(true);\r\n      },\r\n\r\n    };\r\n\r\n\r\n    this.view = async () => {\r\n      return `<p>Page Focus:  ${(this.data === true) ? \"🟢 TRUE\" : \" 🔻 FALSE\"}</p>`;\r\n    };\r\n\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n    };\r\n\r\n\r\n    this.initView = async () =>{\r\n      return `<footer id=\"${this.id}\" ></footer>`;\r\n    };\r\n\r\n    window.addEventListener('blur', this.meth.blur);\r\n    window.addEventListener('focus', this.meth.focus);\r\n    window.addEventListener('load', this.meth[(document.hasFocus()) ? \"focus\" : \"blur\"]);\r\n\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/classes/App_Footer.class.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/components/classes/App_Header.class.js":
/*!***************************************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/classes/App_Header.class.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers } = __webpack_require__(/*! ../../../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { printButton, clickExec } = helpers;\r\n\r\nmodule.exports = class V_App_Header extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    // Just to be able to navigate it easier [id]\r\n    props.id = props.id || \"V_App_Header\";\r\n    props.data = props.data || \"\";\r\n\r\n    super(props);\r\n\r\n    this.meth = {\r\n      alertSample: async () => alert(\"Sample alert\"),\r\n      toggleNavigation: async () => alert(\"Toggle navigation\")\r\n    };\r\n\r\n    this.view = async () => {\r\n      return `<info>\r\n                <h2>${this.data.title || \"Default V_APP_HEADER._.TITLE\"}</h2>\r\n                <p>${this.data.description || \"Default V_APP_HEADER._.DESCRIPTION\"}</p>\r\n              </info>\r\n              <actions>\r\n                ${await printButton({ icon: '⛔', text: 'Alert Sample', action: \"alertSample\" })}\r\n                ${await printButton({ icon: '⛔', text: 'Open Navigation', action: \"toggleNavigation\" })}\r\n              </actions>`;\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n\r\n      await clickExec(`#${this.id} [action=\"alertSample\"]`, this.meth.alertSample);\r\n      await clickExec(`#${this.id} [action=\"toggleNavigation\"]`, this.meth.toggleNavigation);\r\n\r\n    };\r\n\r\n\r\n    this.initView = async () => {\r\n      return `<header id=\"${this.id}\" ></header>`;\r\n    };\r\n\r\n\r\n  }\r\n\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/classes/App_Header.class.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/components/classes/Counter_Demo.js":
/*!***********************************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/classes/Counter_Demo.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers } = __webpack_require__(/*! ../../../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { printButton, clickExec } = helpers;\r\n\r\n\r\nmodule.exports = class Counter_Demo extends V_Base {\r\n  constructor(props) {\r\n\r\n    props.id = props.id || \"Counter_Demo\";\r\n    props.data = props.data || null;\r\n\r\n    super(props);\r\n\r\n    this.default = props.default || 0;\r\n\r\n    this.meth = {\r\n      reset: async () => this.state(this.default),\r\n      increment: async () => this.state(this.data + 1),\r\n      decrement: async () => this.state(this.data - 1),\r\n    };\r\n\r\n    this.view = async () => {\r\n\r\n      return `<info>\r\n                <h3 class=\"comp_id\">➿ ID:\\n <span>${this.id}</span></h3>\r\n                <h3 class=\"dataInfoPart\">\r\n                  ${(this.data != this.default) ? await printButton({icon:'❌', action: 'reset'}) : \"\"}\r\n                  <p>${this.data}</p>\r\n                </h3>\r\n              </info>\r\n              <actions>\r\n                ${await printButton({ icon: '🔼', text: 'Increment', action: \"inc\" })}\r\n                ${await printButton({ icon: '🔻', text: 'Decrement', action: \"dec\" })}\r\n              </actions>`;\r\n    };\r\n\r\n\r\n    this.update = async () => {\r\n\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n\r\n      if (this.data != this.default) clickExec(`#${this.id} [action=\"reset\"]`, this.meth.reset);\r\n\r\n      clickExec(`#${this.id} [action=\"inc\"]`, this.meth.increment);\r\n      clickExec(`#${this.id} [action=\"dec\"]`, this.meth.decrement);\r\n\r\n    };\r\n\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/classes/Counter_Demo.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/components/classes/Text_Input_Demo.js":
/*!**************************************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/classes/Text_Input_Demo.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers } = __webpack_require__(/*! ../../../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { printButton, clickExec } = helpers;\r\n\r\n\r\nmodule.exports = class Text_Input_Demo extends V_Base {\r\n  constructor(props) {\r\n\r\n    props.id = props.id || \"Text_Input_Demo\";\r\n    props.data = props.data || null;\r\n\r\n    super(props);\r\n\r\n    this.default = props.default || '';\r\n\r\n\r\n    this.meth = {\r\n\r\n      reset: async () => this.state(this.default),\r\n\r\n      input: async (e) => {\r\n        this.data = e.target.value;\r\n        document.querySelector(\"#\" + this.id + \" .dataInfoPart\").innerHTML = this.data;\r\n      },\r\n\r\n      change: async (e) => {\r\n        this.state(e.target.value);\r\n      }\r\n\r\n    };\r\n\r\n    this.view = async () => {\r\n\r\n      let btnTempInfo = (this.default == '') ? { icon: '❌', text: 'Clear', action: \"reset\" } : { icon: '🌀', text: 'Reset [' + this.default + ']', action: \"reset\" };\r\n\r\n      let btnInfo = await printButton(btnTempInfo);\r\n\r\n      return `<info>\r\n                <h3 class=\"comp_id\">➿ ID:\\n <span>${this.id}</span></h3>\r\n                <h3 class=\"dataInfoPart\">${this.data}</h3>\r\n              </info>\r\n              <actions>\r\n                <input type=\"text\" value=\"${this.data}\" name=\"userInput\" />\r\n                ${(this.data != this.default) ? btnInfo : ''}\r\n              </actions>`;\r\n    };\r\n\r\n    this.addEvents = async () => {\r\n\r\n      if (this.data != this.default) clickExec(`#${this.id} .reset`, this.meth.reset);\r\n\r\n      document.querySelector(`#${this.id} [name=\"userInput\"]`).addEventListener('input', this.meth.input);\r\n      document.querySelector(`#${this.id} [name=\"userInput\"]`).addEventListener('change', this.meth.change);\r\n\r\n      await clickExec(`#${this.id} [action=\"reset\"]`, this.meth.reset);\r\n\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n      await this.addEvents();\r\n    };\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/classes/Text_Input_Demo.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/components/classes/V_Root_Application.js":
/*!*****************************************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/classes/V_Root_Application.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { v_components, V_Base } = __webpack_require__(/*! ../../../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { initView, render } = v_components;\r\n\r\nmodule.exports = class V_Root_Application extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    // Just to be able to navigate it easier [id]\r\n    props.id = props.id || \"v_app\";\r\n    props.data = props.data || {};\r\n\r\n    super(props);\r\n\r\n    this.view = async () => {\r\n      return `${await initView('V_AppHeader01')}\r\n              ${this.data}\r\n              ${await initView('V_AppFooter01')}`;\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(this.id).innerHTML = await this.view();\r\n    };\r\n\r\n    this.init = async () => {\r\n\r\n      this.data = `<main>\r\n                    ${await initView('number_demo_elem')}\r\n                    ${await initView('Application_AltComp')}\r\n                    ${await initView('Application_Component_Base')}\r\n                    ${await initView('its_over_9000')}\r\n                    ${await initView('ANA_EXAMPLE')}\r\n                    ${await initView('txtCP')}\r\n                    ${await initView('more_things_to_mess')}\r\n                   </main>`;\r\n\r\n      await this.update();\r\n      await v_components.init();\r\n    };\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/classes/V_Root_Application.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/components/classes/index.js":
/*!****************************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/classes/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n  V_Root_Application: __webpack_require__(/*! ./V_Root_Application */ \"./__tests__/Examples/Demo_01/components/classes/V_Root_Application.js\"),\r\n  Counter_Demo: __webpack_require__(/*! ./Counter_Demo */ \"./__tests__/Examples/Demo_01/components/classes/Counter_Demo.js\"),\r\n  Text_Input_Demo: __webpack_require__(/*! ./Text_Input_Demo */ \"./__tests__/Examples/Demo_01/components/classes/Text_Input_Demo.js\"),\r\n  V_App_Footer: __webpack_require__(/*! ./App_Footer.class */ \"./__tests__/Examples/Demo_01/components/classes/App_Footer.class.js\"),\r\n  V_App_Header: __webpack_require__(/*! ./App_Header.class */ \"./__tests__/Examples/Demo_01/components/classes/App_Header.class.js\"),\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/classes/index.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/components/index.js":
/*!********************************************************!*\
  !*** ./__tests__/Examples/Demo_01/components/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst { V_Root_Application, Counter_Demo, Text_Input_Demo, V_App_Footer, V_App_Header } = __webpack_require__(/*! ./classes/ */ \"./__tests__/Examples/Demo_01/components/classes/index.js\");\r\n\r\n\r\nmodule.exports = components = {\r\n\r\n  v_app: new V_Root_Application({ id: \"v_app\" }),\r\n\r\n\r\n  appHeader: new V_App_Header({ id: \"V_AppHeader01\", data: { title: \"🚀 V_State_Manager\" } }),\r\n  appFooter: new V_App_Footer({ id: \"V_AppFooter01\" }),\r\n\r\n\r\n  number_demo_elem: new Counter_Demo({ id: \"number_demo_elem\", data: 50, default: 0 }),\r\n  altUsage: new Counter_Demo({ id: \"Application_AltComp\", data: 50, default: 0 }),\r\n  app_2: new Counter_Demo({ id: \"Application_Component_Base\", data: 1250, default: 500 }),\r\n  its_over_9000: new Counter_Demo({ id: \"its_over_9000\", data: 9999, default: 9999 }),\r\n\r\n\r\n  ANA_EXAMPLE: new Text_Input_Demo({ id: \"ANA_EXAMPLE\", data: \"ANA_EXAMPLE\", default: \"ANA_EXAMPLE\" }),\r\n  txtCP: new Text_Input_Demo({ id: \"txtCP\", data: \"Starting String Value\", default: \"\" }),\r\n  more_things_to_mess: new Text_Input_Demo({ id: \"more_things_to_mess\", data: \"Example String INIT Value.\", default: \"more_things_to_mess\" }),\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/components/index.js?");

/***/ }),

/***/ "./__tests__/Examples/Demo_01/index.js":
/*!*********************************************!*\
  !*** ./__tests__/Examples/Demo_01/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { v_app } = __webpack_require__(/*! ./components */ \"./__tests__/Examples/Demo_01/components/index.js\");\r\nconst { v_components } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\n\r\n(async () => {\r\n\r\n  console.log(v_components);\r\n  await v_app.init();\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Examples/Demo_01/index.js?");

/***/ }),

/***/ "./src/state_manager/core/V_Base.js":
/*!******************************************!*\
  !*** ./src/state_manager/core/V_Base.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const v_components = __webpack_require__(/*! ./v_components */ \"./src/state_manager/core/v_components.js\");\r\n\r\n\r\nmodule.exports = class V_Base {\r\n\r\n  constructor(data) {\r\n\r\n    this.id = data.id || \"v_app\";\r\n\r\n    this.data = data.data || {};\r\n\r\n    this.meth = data.meth || {};\r\n\r\n    this.type = async () => (this.constructor.name || null);\r\n\r\n    this.view = data.view || (async () => console.log(\"Missing VIEW() Method\"));\r\n\r\n    this.update = data.update || (async () => console.log(\"Missing UPDATE() Method\"));\r\n\r\n    this.state = async (value) => {\r\n      this.data = value;\r\n      await this.update();\r\n    };\r\n\r\n    this.initView = async () => {\r\n      return `<base_elem id=\"${this.id}\"></base_elem>`;\r\n    };\r\n\r\n    v_components.add(this);\r\n\r\n    return this;\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/V_Base.js?");

/***/ }),

/***/ "./src/state_manager/core/V_Components_Store.js":
/*!******************************************************!*\
  !*** ./src/state_manager/core/V_Components_Store.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { vcsErrors } = __webpack_require__(/*! ../helpers/ */ \"./src/state_manager/helpers/index.js\");\r\n\r\n\r\nmodule.exports = function V_Components_Store(data = {}) {\r\n\r\n  this._list = {};\r\n\r\n\r\n  this.getAll = async () => {\r\n    return this._list;\r\n  };\r\n\r\n\r\n  this.get = async (componentName = null) => {\r\n    return (typeof componentName === 'string') ? (this._list[componentName] || new Error(vcsErrors.notFound(componentName))) : new Error(vcsErrors.type());\r\n  };\r\n\r\n\r\n  this.add = async (vComponent) => {\r\n    if ([\"V_Base\", \"V_Base\"].indexOf(vComponent.type()) === -1) {\r\n      this._list[vComponent.id] = vComponent;\r\n    } else {\r\n      throw new Error(vcsErrors.notInstance());\r\n    }\r\n  };\r\n\r\n\r\n  this.remove = async (componentName) => {\r\n    if (typeof componentName === 'string') {\r\n      this._list = this._list.filter((v) => v.name !== componentName);\r\n    } else {\r\n      throw new Error(vcsErrors.type());\r\n    }\r\n  };\r\n\r\n\r\n  this.update = async (componentName) => {\r\n    if (typeof componentName === 'string') {\r\n      await (await this.get(componentName)).update();\r\n    } else {\r\n      throw new Error(vcsErrors.type());\r\n    }\r\n  };\r\n\r\n\r\n  this.render = async (componentName) => {\r\n    if (typeof componentName === 'string') {\r\n      await (await this.get(componentName)).update();\r\n    } else {\r\n      throw new Error(vcsErrors.type());\r\n    }\r\n  };\r\n\r\n\r\n\r\n\r\n  this.type = async () => {\r\n    return this.constructor.name;\r\n  };\r\n\r\n\r\n  this.purge = async () => {\r\n    this._list = {};\r\n  };\r\n\r\n\r\n  this.destroy = async () => this.purge();\r\n\r\n\r\n  this.init = async () => {\r\n\r\n    const compNames = Object.keys(this._list);\r\n\r\n    for (let i = 0; i < compNames.length; i++) {\r\n      await this._list[compNames[i]].update();\r\n    }\r\n\r\n  };\r\n\r\n  this.initView = async (compName) => {\r\n    return await this._list[compName].initView() || false;\r\n  };\r\n\r\n  return this;\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/V_Components_Store.js?");

/***/ }),

/***/ "./src/state_manager/core/index.js":
/*!*****************************************!*\
  !*** ./src/state_manager/core/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const v_components = __webpack_require__(/*! ./v_components */ \"./src/state_manager/core/v_components.js\");\r\nconst V_Base = __webpack_require__(/*! ./V_Base */ \"./src/state_manager/core/V_Base.js\");\r\n\r\nmodule.exports = core = {\r\n  V_Base,\r\n  v_components,\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/index.js?");

/***/ }),

/***/ "./src/state_manager/core/v_components.js":
/*!************************************************!*\
  !*** ./src/state_manager/core/v_components.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const V_Components_Store = __webpack_require__(/*! ./V_Components_Store */ \"./src/state_manager/core/V_Components_Store.js\");\r\nconst v_components = new V_Components_Store();\r\n\r\n\r\nmodule.exports = v_components;\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/v_components.js?");

/***/ }),

/***/ "./src/state_manager/helpers/clickExec.js":
/*!************************************************!*\
  !*** ./src/state_manager/helpers/clickExec.js ***!
  \************************************************/
/***/ ((module) => {

eval("const clickExec = async (selector, callback) => {\r\n  try {\r\n    return document.querySelector(selector).addEventListener(\"click\", callback);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\nmodule.exports = clickExec;\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/helpers/clickExec.js?");

/***/ }),

/***/ "./src/state_manager/helpers/index.js":
/*!********************************************!*\
  !*** ./src/state_manager/helpers/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = helpers = {\r\n  clickExec: __webpack_require__(/*! ./clickExec */ \"./src/state_manager/helpers/clickExec.js\"),\r\n  printButton: __webpack_require__(/*! ./print.button */ \"./src/state_manager/helpers/print.button.js\"),\r\n  vcsErrors: __webpack_require__(/*! ./vcs_errors */ \"./src/state_manager/helpers/vcs_errors.js\"),\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/helpers/index.js?");

/***/ }),

/***/ "./src/state_manager/helpers/print.button.js":
/*!***************************************************!*\
  !*** ./src/state_manager/helpers/print.button.js ***!
  \***************************************************/
/***/ ((module) => {

eval("const printButton = async (values = {}) => {\r\n\r\n  const { icon, text, action } = values;\r\n\r\n  return `<button ${(action != undefined) ? \"action='\" + action + \"'\" : ''}>\r\n            ${(icon != undefined) ? \"<i>\" + icon + \"</i>\" : ''}\r\n            ${(text != undefined) ? \"<p>\" + text + \"</p>\" : ''}\r\n          </button>`;\r\n};\r\n\r\nmodule.exports = printButton;\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/helpers/print.button.js?");

/***/ }),

/***/ "./src/state_manager/helpers/vcs_errors.js":
/*!*************************************************!*\
  !*** ./src/state_manager/helpers/vcs_errors.js ***!
  \*************************************************/
/***/ ((module) => {

eval("const vcsErrors = {\r\n\r\n  type: () => {\r\n    return { location: \"V_Components_Store\", status: \"error\", message: \"[componentName] must be string type.\" };\r\n  },\r\n\r\n  notFound: (componentName) => {\r\n    return { location: \"V_Components_Store\", status: \"warn\", message: \"No Component Available using the provided name: \" + componentName };\r\n  },\r\n\r\n  notInstance: () => {\r\n    return { location: \"V_Components_Store\", status: \"error\", message: \"[vComponent] must be instance of V_Component.\" };\r\n  },\r\n\r\n};\r\n\r\nmodule.exports = vcsErrors;\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/helpers/vcs_errors.js?");

/***/ }),

/***/ "./src/state_manager/index.js":
/*!************************************!*\
  !*** ./src/state_manager/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const stateManager = {};\r\n\r\n/*\r\n * Hooking Classes and objects like -> V_BASE and vComponents\r\n */\r\nconst { V_Base, v_components } = __webpack_require__(/*! ./core */ \"./src/state_manager/core/index.js\");\r\n\r\nstateManager.V_Base = V_Base;\r\nstateManager.v_components = v_components;\r\n\r\n\r\nconst helpers = __webpack_require__(/*! ./helpers */ \"./src/state_manager/helpers/index.js\");\r\nstateManager.helpers = helpers;\r\n\r\n\r\nmodule.exports = stateManager;\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./__tests__/Examples/Demo_01/index.js");
/******/ 	
/******/ })()
;