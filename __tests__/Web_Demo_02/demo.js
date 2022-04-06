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

/***/ "./__tests__/Web_Demo_02/Class/Application.js":
/*!****************************************************!*\
  !*** ./__tests__/Web_Demo_02/Class/Application.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base } = (__webpack_require__(/*! ../../../src */ \"./src/index.js\").sm2);\r\n\r\n\r\nmodule.exports = class App extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    super(props);\r\n\r\n\r\n    this.view = async () => {\r\n      return `${await this.data.header.init()}\r\n              ${await this.data.body.init()}\r\n              ${await this.data.footer.init()}`;\r\n    };\r\n\r\n\r\n    window.addEventListener(\"load\", async () => {\r\n      await this.update();\r\n      const { header, body, footer } = this.data;\r\n      header.update();\r\n      body.update();\r\n      footer.update();\r\n    });\r\n\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_02/Class/Application.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_02/Class/Page_Focused_Status.js":
/*!************************************************************!*\
  !*** ./__tests__/Web_Demo_02/Class/Page_Focused_Status.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base } = (__webpack_require__(/*! ../../../src */ \"./src/index.js\").sm2);\r\n\r\n\r\nmodule.exports = class Page_Focused_Status extends V_Base {\r\n\r\n\r\n  constructor(props = {}) {\r\n\r\n\r\n    super(props);\r\n\r\n\r\n    this.meth = {\r\n\r\n      blur: async () => {\r\n        await this.state(false);\r\n      },\r\n\r\n      focus: async () => {\r\n        await this.state(true);\r\n      },\r\n\r\n    };\r\n\r\n    this.view = async () => {\r\n      return \"Page Focused: \" + ((this.data === true) ? \"🟢\" : \"❌\");\r\n    };\r\n\r\n\r\n    window.addEventListener('blur', this.meth.blur);\r\n    window.addEventListener('focus', this.meth.focus);\r\n    window.addEventListener('load', this.meth[(document.hasFocus()) ? \"focus\" : \"blur\"]);\r\n\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_02/Class/Page_Focused_Status.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_02/Class/Text_Sample.js":
/*!****************************************************!*\
  !*** ./__tests__/Web_Demo_02/Class/Text_Sample.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base } = (__webpack_require__(/*! ../../../src */ \"./src/index.js\").sm2);\r\n\r\n\r\nmodule.exports = class Text_Sample extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    super(props);\r\n\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_02/Class/Text_Sample.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_02/index.js":
/*!****************************************!*\
  !*** ./__tests__/Web_Demo_02/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst Application = __webpack_require__(/*! ./Class/Application */ \"./__tests__/Web_Demo_02/Class/Application.js\");\r\nconst Page_Focused_Status = __webpack_require__(/*! ./Class/Page_Focused_Status */ \"./__tests__/Web_Demo_02/Class/Page_Focused_Status.js\");\r\nconst Text_Sample = __webpack_require__(/*! ./Class/Text_Sample */ \"./__tests__/Web_Demo_02/Class/Text_Sample.js\");\r\n\r\n\r\nconst vApp = new Application({\r\n  id: \"app\",\r\n\r\n  data: {\r\n\r\n    header: new Text_Sample({\r\n      id: \"appHeader\",\r\n      data: \"Application Demo Header Content\"\r\n    }),\r\n\r\n    body: new Page_Focused_Status({\r\n      id: \"appBody\"\r\n    }),\r\n\r\n    footer: new Text_Sample({\r\n      id: \"appFooter\",\r\n      data: \"FOOTER Demo YEA Content\"\r\n    })\r\n\r\n  }\r\n\r\n});\r\n\r\n\r\nconsole.table(vApp);\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_02/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const packageInfo = __webpack_require__(/*! ../package.json */ \"./package.json\") || {};\r\n\r\n\r\n\r\nconst _V_ = {\r\n\r\n  name: packageInfo.name || 'Application_Name_Placeholder',\r\n  description: packageInfo.description || 'Application Description Placeholder Text.',\r\n  version: packageInfo.version || 'x.x.x',\r\n\r\n  mode : \"development\" || 0,\r\n\r\n  stateManager: __webpack_require__(/*! ./state_manager */ \"./src/state_manager/index.js\"),\r\n\r\n  sm2: __webpack_require__(/*! ./sm2 */ \"./src/sm2/index.js\"),\r\n\r\n};\r\n\r\nisDev = () => (_V_.mode.toLowerCase() !== 'production');\r\n\r\nif (isDev) {\r\n  console.log(_V_);\r\n}\r\n\r\n\r\nmodule.exports = _V_;\r\n\n\n//# sourceURL=webpack://-v-/./src/index.js?");

/***/ }),

/***/ "./src/sm2/core/V_Base.js":
/*!********************************!*\
  !*** ./src/sm2/core/V_Base.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vStore = __webpack_require__(/*! ./vStore */ \"./src/sm2/core/vStore.js\");\r\n\r\n\r\nmodule.exports = class V_Base {\r\n\r\n  constructor(data) {\r\n\r\n    this.id = data.id || null;\r\n\r\n    this.data = data.data || null;\r\n\r\n    this.view = data.view || (async () => {\r\n      console.log(`[${await this.type()}]#${this.id}.view()`);\r\n      return JSON.stringify(this.data);\r\n    });\r\n\r\n\r\n\r\n    //! Get Type / Constructor Name\r\n    this.type = async () => this.constructor.name;\r\n\r\n    this.class = async () => this.type();\r\n\r\n\r\n    this.update = async () => {\r\n      console.log(`[${await this.type()}]#${this.id}.update()`);\r\n      let selector = `${this.constructor.name || ''}#${this.id}`;\r\n\r\n      let elem = document.querySelector(selector);\r\n\r\n      if (elem) elem.innerHTML = await this.view();\r\n    };\r\n\r\n\r\n    this.state = async (value) => {\r\n      console.log(`[${await this.type()}]#${this.id}.state( ${value} )`);\r\n      this.data = value;\r\n      await this.update();\r\n    };\r\n\r\n    //! Print HTML Component Root Element\r\n    //* Element Container that will contain data/view\r\n    this.init = async () => {\r\n      console.log(`[${await this.type()}]#${this.id}.init( ${this.id} )`);\r\n      let itemType = await this.type();\r\n      return `<${itemType} id=\"${this.id}\"></${itemType}>`;\r\n    };\r\n\r\n    vStore.add(this);\r\n\r\n    return this;\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/core/V_Base.js?");

/***/ }),

/***/ "./src/sm2/core/V_Components_Store.js":
/*!********************************************!*\
  !*** ./src/sm2/core/V_Components_Store.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { vcsErrors } = __webpack_require__(/*! ../helpers/ */ \"./src/sm2/helpers/index.js\");\r\n\r\n\r\nmodule.exports = class V_Components_Store {\r\n\r\n  constructor(data) {\r\n    this._list = {};\r\n\r\n\r\n    this.getAll = async () => {\r\n      return this._list;\r\n    };\r\n\r\n\r\n    this.get = async (componentName = null) => {\r\n      return this._list[componentName];\r\n    };\r\n\r\n\r\n    this.add = async (vComponent) => {\r\n      if ([\"V_Base\", \"V_Base\"].indexOf(vComponent.type()) === -1) {\r\n        this._list[vComponent.id] = vComponent;\r\n      } else {\r\n        throw new Error(vcsErrors.notInstance());\r\n      }\r\n    };\r\n\r\n\r\n    this.remove = async (componentName) => {\r\n      if (typeof componentName === 'string') {\r\n        this._list = this._list.filter((v) => v.name !== componentName);\r\n      } else {\r\n        throw new Error(vcsErrors.type());\r\n      }\r\n    };\r\n\r\n\r\n    this.update = async (componentName) => {\r\n      if (typeof componentName === 'string') {\r\n        await (await this.get(componentName)).update();\r\n      } else {\r\n        throw new Error(vcsErrors.type());\r\n      }\r\n    };\r\n\r\n\r\n    this.render = async (componentName) => {\r\n      if (typeof componentName === 'string') {\r\n        await (await this.get(componentName)).update();\r\n      } else {\r\n        throw new Error(vcsErrors.type());\r\n      }\r\n    };\r\n\r\n\r\n    this.type = async () => {\r\n      return this.constructor.name;\r\n    };\r\n\r\n\r\n    this.purge = async () => {\r\n      this._list = {};\r\n    };\r\n\r\n\r\n    this.destroy = async () => this.purge();\r\n\r\n\r\n    this.init = async () => {\r\n\r\n      const compNames = Object.keys(this._list);\r\n\r\n      for (let i = 0; i < compNames.length; i++) {\r\n        await this._list[compNames[i]].update();\r\n      }\r\n\r\n    };\r\n\r\n    this.initView = async (compName) => {\r\n      return await this._list[compName].init() || false;\r\n    };\r\n\r\n    return this;\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/core/V_Components_Store.js?");

/***/ }),

/***/ "./src/sm2/core/index.js":
/*!*******************************!*\
  !*** ./src/sm2/core/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vStore = __webpack_require__(/*! ./vStore */ \"./src/sm2/core/vStore.js\");\r\nconst V_Base = __webpack_require__(/*! ./V_Base */ \"./src/sm2/core/V_Base.js\");\r\nconst V_Components_Store = __webpack_require__(/*! ./V_Components_Store */ \"./src/sm2/core/V_Components_Store.js\");\r\n\r\nmodule.exports = core = {\r\n  V_Base,\r\n  vStore,\r\n  V_Components_Store\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/core/index.js?");

/***/ }),

/***/ "./src/sm2/core/vStore.js":
/*!********************************!*\
  !*** ./src/sm2/core/vStore.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const V_Components_Store = __webpack_require__(/*! ./V_Components_Store */ \"./src/sm2/core/V_Components_Store.js\");\r\n\r\nconst vStore = new V_Components_Store();\r\n\r\nmodule.exports = vStore;\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/core/vStore.js?");

/***/ }),

/***/ "./src/sm2/helpers/clickExec.js":
/*!**************************************!*\
  !*** ./src/sm2/helpers/clickExec.js ***!
  \**************************************/
/***/ ((module) => {

eval("const clickExec = async (selector, callback) => {\r\n  try {\r\n    return document.querySelector(selector).addEventListener(\"click\", callback);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\nmodule.exports = clickExec;\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/helpers/clickExec.js?");

/***/ }),

/***/ "./src/sm2/helpers/index.js":
/*!**********************************!*\
  !*** ./src/sm2/helpers/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = helpers = {\r\n  clickExec: __webpack_require__(/*! ./clickExec */ \"./src/sm2/helpers/clickExec.js\"),\r\n  printButton: __webpack_require__(/*! ./print.button */ \"./src/sm2/helpers/print.button.js\"),\r\n  vcsErrors: __webpack_require__(/*! ./vcs_errors */ \"./src/sm2/helpers/vcs_errors.js\"),\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/helpers/index.js?");

/***/ }),

/***/ "./src/sm2/helpers/print.button.js":
/*!*****************************************!*\
  !*** ./src/sm2/helpers/print.button.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const printButton = async (values = {}) => {\r\n\r\n  const { icon, text, action } = values;\r\n\r\n  return `<button ${(action != undefined) ? \"action='\" + action + \"'\" : ''}>\r\n            ${(icon != undefined) ? \"<i>\" + icon + \"</i>\" : ''}\r\n            ${(text != undefined) ? \"<p>\" + text + \"</p>\" : ''}\r\n          </button>`;\r\n};\r\n\r\nmodule.exports = printButton;\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/helpers/print.button.js?");

/***/ }),

/***/ "./src/sm2/helpers/vcs_errors.js":
/*!***************************************!*\
  !*** ./src/sm2/helpers/vcs_errors.js ***!
  \***************************************/
/***/ ((module) => {

eval("const vcsErrors = {\r\n\r\n  type: () => {\r\n    return { location: \"V_Components_Store\", status: \"error\", message: \"[componentName] must be string type.\" };\r\n  },\r\n\r\n  notFound: (componentName) => {\r\n    return { location: \"V_Components_Store\", status: \"warn\", message: \"No Component Available using the provided name: \" + componentName };\r\n  },\r\n\r\n  notInstance: () => {\r\n    return { location: \"V_Components_Store\", status: \"error\", message: \"[vComponent] must be instance of V_Component.\" };\r\n  },\r\n\r\n};\r\n\r\nmodule.exports = vcsErrors;\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/helpers/vcs_errors.js?");

/***/ }),

/***/ "./src/sm2/index.js":
/*!**************************!*\
  !*** ./src/sm2/index.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst { V_Base, vStore, V_Components_Store } = __webpack_require__(/*! ./core */ \"./src/sm2/core/index.js\");\r\n\r\nconst helpers = __webpack_require__(/*! ./helpers */ \"./src/sm2/helpers/index.js\");\r\n\r\nmodule.exports = {\r\n  V_Base,\r\n  V_Components_Store,\r\n  vStore,\r\n  helpers\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/index.js?");

/***/ }),

/***/ "./src/state_manager/core/V_Base.js":
/*!******************************************!*\
  !*** ./src/state_manager/core/V_Base.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vStore = __webpack_require__(/*! ./vStore */ \"./src/state_manager/core/vStore.js\");\r\n\r\n\r\nmodule.exports = class V_Base {\r\n\r\n  constructor(data) {\r\n\r\n    this.id = data.id || null;\r\n\r\n    this.data = data.data || null;\r\n\r\n    this.view = data.view || (() => console.log(\"Component ID : \" + this.id +\" ; MISSING VIEW METHOD.\" ));\r\n\r\n    this.update = data.update || null;\r\n\r\n    this.state = async (value) => {\r\n      this.data = value;\r\n      await this.update();\r\n    };\r\n\r\n\r\n    //! Get Type / Constructor Name\r\n    this.type = async () => this.constructor.name;\r\n\r\n    this.class = async () => this.type();\r\n\r\n    //! Print HTML Component Root Element\r\n    //* Element Container that will contain data/view\r\n    this.init = async () => {\r\n      let itemType = await this.type();\r\n      return `<${itemType} id=\"${this.id}\"></${itemType}>`;\r\n    };\r\n\r\n    vStore.add(this);\r\n\r\n    return this;\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/V_Base.js?");

/***/ }),

/***/ "./src/state_manager/core/V_Components_Store.js":
/*!******************************************************!*\
  !*** ./src/state_manager/core/V_Components_Store.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { vcsErrors } = __webpack_require__(/*! ../helpers/ */ \"./src/state_manager/helpers/index.js\");\r\n\r\n\r\nmodule.exports = function V_Components_Store(data = {}) {\r\n\r\n  this._list = {};\r\n\r\n\r\n  this.getAll = async () => {\r\n    return this._list;\r\n  };\r\n\r\n\r\n  this.get = async (componentName = null) => {\r\n    return (typeof componentName === 'string') ? (this._list[componentName] || new Error(vcsErrors.notFound(componentName))) : new Error(vcsErrors.type());\r\n  };\r\n\r\n\r\n  this.add = async (vComponent) => {\r\n    if ([\"V_Base\", \"V_Base\"].indexOf(vComponent.type()) === -1) {\r\n      this._list[vComponent.id] = vComponent;\r\n    } else {\r\n      throw new Error(vcsErrors.notInstance());\r\n    }\r\n  };\r\n\r\n\r\n  this.remove = async (componentName) => {\r\n    if (typeof componentName === 'string') {\r\n      this._list = this._list.filter((v) => v.name !== componentName);\r\n    } else {\r\n      throw new Error(vcsErrors.type());\r\n    }\r\n  };\r\n\r\n\r\n  this.update = async (componentName) => {\r\n    if (typeof componentName === 'string') {\r\n      await (await this.get(componentName)).update();\r\n    } else {\r\n      throw new Error(vcsErrors.type());\r\n    }\r\n  };\r\n\r\n\r\n  this.render = async (componentName) => {\r\n    if (typeof componentName === 'string') {\r\n      await (await this.get(componentName)).update();\r\n    } else {\r\n      throw new Error(vcsErrors.type());\r\n    }\r\n  };\r\n\r\n\r\n  this.type = async () => {\r\n    return this.constructor.name;\r\n  };\r\n\r\n\r\n  this.purge = async () => {\r\n    this._list = {};\r\n  };\r\n\r\n\r\n  this.destroy = async () => this.purge();\r\n\r\n\r\n  this.init = async () => {\r\n\r\n    const compNames = Object.keys(this._list);\r\n\r\n    for (let i = 0; i < compNames.length; i++) {\r\n      await this._list[compNames[i]].update();\r\n    }\r\n\r\n  };\r\n\r\n  this.initView = async (compName) => {\r\n    return await this._list[compName].init() || false;\r\n  };\r\n\r\n  return this;\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/V_Components_Store.js?");

/***/ }),

/***/ "./src/state_manager/core/index.js":
/*!*****************************************!*\
  !*** ./src/state_manager/core/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vStore = __webpack_require__(/*! ./vStore */ \"./src/state_manager/core/vStore.js\");\r\nconst V_Base = __webpack_require__(/*! ./V_Base */ \"./src/state_manager/core/V_Base.js\");\r\n\r\nmodule.exports = core = {\r\n  V_Base,\r\n  vStore,\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/index.js?");

/***/ }),

/***/ "./src/state_manager/core/vStore.js":
/*!******************************************!*\
  !*** ./src/state_manager/core/vStore.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const V_Components_Store = __webpack_require__(/*! ./V_Components_Store */ \"./src/state_manager/core/V_Components_Store.js\");\r\n\r\nconst vStore = new V_Components_Store();\r\n\r\nmodule.exports = vStore;\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/core/vStore.js?");

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

eval("\r\nconst { V_Base, vStore } = __webpack_require__(/*! ./core */ \"./src/state_manager/core/index.js\");\r\n\r\nconst helpers = __webpack_require__(/*! ./helpers */ \"./src/state_manager/helpers/index.js\");\r\n\r\nmodule.exports = {\r\n  V_Base,\r\n  vStore,\r\n  helpers\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/state_manager/index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"-v-\",\"version\":\"1.0.3\",\"description\":\"-v-.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"jest\",\"start\":\"node app.js\",\"dev\":\" bash -c \\\\\" NODE_ENV=development node app.js \\\\\" \",\"build:example.demo1\":\"webpack --config __tests__/Web_Demo_01/webpack.js\",\"build:example.demo1-dev\":\"bash -c \\\\\" NODE_ENV=development npm run build:example.demo1 \\\\\" \",\"build:example.demo2\":\"webpack --config __tests__/Web_Demo_02/webpack.js\",\"build:example.demo2-dev\":\"bash -c \\\\\" NODE_ENV=development npm run build:example.demo2 \\\\\" \"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/V-core9/-v-.js.git\"},\"keywords\":[],\"author\":\"\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/V-core9/-v-.js/issues\"},\"homepage\":\"https://github.com/V-core9/-v-.js#readme\",\"dependencies\":{\"v_file_system\":\"^1.0.5\"},\"devDependencies\":{\"jest\":\"^27.5.1\",\"webpack\":\"^5.71.0\",\"webpack-cli\":\"^4.9.2\"}}');\n\n//# sourceURL=webpack://-v-/./package.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./__tests__/Web_Demo_02/index.js");
/******/ 	
/******/ })()
;