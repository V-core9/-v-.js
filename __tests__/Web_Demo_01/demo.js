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

/***/ "./__tests__/Web_Demo_01/Class/App_Footer.js":
/*!***************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/App_Footer.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\n\r\n\r\nmodule.exports = class App_Footer extends V_Base {\r\n\r\n\r\n  constructor(props = {}) {\r\n\r\n\r\n    super(props);\r\n\r\n\r\n    this.meth = {\r\n\r\n      blur: async () => {\r\n        await this.state(false);\r\n      },\r\n\r\n      focus: async () => {\r\n        await this.state(true);\r\n      },\r\n\r\n    };\r\n\r\n\r\n    this.view = async () => {\r\n      return `<p>Page Focus:  ${(this.data === true) ? \"🟢 TRUE\" : \" 🔻 FALSE\"}</p>`;\r\n    };\r\n\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n    };\r\n\r\n\r\n    this.events = async () => {\r\n      window.addEventListener('blur', this.meth.blur);\r\n      window.addEventListener('focus', this.meth.focus);\r\n      window.addEventListener('load', this.meth[(document.hasFocus()) ? \"focus\" : \"blur\"]);\r\n    };\r\n\r\n    this.events();\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/App_Footer.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/App_Header.js":
/*!***************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/App_Header.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base,  vStore } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { initView } = vStore;\r\n\r\nmodule.exports = class App_Header extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    super(props);\r\n\r\n    this.view = async () => {\r\n      return `${await initView('appHeadInfoBlock')}\r\n              ${await initView('mainHeadNav01')}`;\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n    };\r\n\r\n  }\r\n\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/App_Header.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/App_Navigation.js":
/*!*******************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/App_Navigation.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { printButton, clickExec } = helpers;\r\n\r\nmodule.exports = class App_Navigation extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    super(props);\r\n\r\n    this.meth = {\r\n      alertSample: async () => alert(\"Sample alert\"),\r\n      toggleNavigation: async () => this.state(!this.data)\r\n    };\r\n\r\n    this.view = async () => {\r\n      return `${await printButton({ icon: '⛔', text: 'Open Navigation', action: \"toggleNavigation\" })}\r\n              ${(this.data == true) ? await printButton({ icon: '⛔', text: 'Alert Sample', action: \"alertSample\" }) : \"\"}\r\n              ${(this.data == true) ? await printButton({ icon: '⛔', text: 'Sec Button', action: \"alertSampleAlt\" }) : \"\"}\r\n                    `;\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n\r\n      if (this.data == true) {\r\n        clickExec(`#${this.id} [action=\"alertSample\"]`, this.meth.alertSample);\r\n        clickExec(`#${this.id} [action=\"alertSampleAlt\"]`, this.meth.alertSample);\r\n      }\r\n\r\n      clickExec(`#${this.id} [action=\"toggleNavigation\"]`, this.meth.toggleNavigation);\r\n\r\n    };\r\n\r\n  }\r\n\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/App_Navigation.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/Counter_Demo.js":
/*!*****************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/Counter_Demo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { printButton, clickExec } = helpers;\r\n\r\n\r\nmodule.exports = class Counter_Demo extends V_Base {\r\n  constructor(props) {\r\n\r\n    super(props);\r\n\r\n    this.default = props.default || 0;\r\n\r\n    this.meth = {\r\n      reset: async () => this.state(this.default),\r\n      increment: async () => this.state(this.data + 1),\r\n      decrement: async () => this.state(this.data - 1),\r\n    };\r\n\r\n    this.view = async () => {\r\n\r\n      return `<info>\r\n                <h3 class=\"comp_id\">\r\n                  <p>➿ ID : <span>${this.id}</span></p>\r\n                  <p>📦 Class : <span>${await this.type()}</span></p>\r\n                </h3>\r\n                <h3 class=\"dataInfoPart\">\r\n                  ${(this.data != this.default) ? await printButton({ icon: '❌', action: 'reset' }) : \"\"}\r\n                  <p>${this.data}</p>\r\n                </h3>\r\n              </info>\r\n              <actions>\r\n\r\n                ${await printButton({ icon: '🔼', text: 'Increment', action: \"inc\" })}\r\n                ${await printButton({ icon: '🔻', text: 'Decrement', action: \"dec\" })}\r\n              </actions>`;\r\n    };\r\n\r\n\r\n    this.update = async () => {\r\n\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n\r\n      if (this.data != this.default) clickExec(`#${this.id} [action=\"reset\"]`, this.meth.reset);\r\n\r\n      clickExec(`#${this.id} [action=\"inc\"]`, this.meth.increment);\r\n      clickExec(`#${this.id} [action=\"dec\"]`, this.meth.decrement);\r\n\r\n    };\r\n\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/Counter_Demo.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/Info_Block.js":
/*!***************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/Info_Block.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers, vStore } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { initView } = vStore;\r\n\r\nmodule.exports = class Info_Block extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    super(props);\r\n\r\n    this.title = props.title || \"Missing Info_Block Title\";\r\n    this.description = props.description || \"Missing Info_Block Description\";\r\n\r\n    this.meth = {\r\n      showInfo: async () => this.state(true),\r\n      hideInfo: async () => this.state(false)\r\n    };\r\n\r\n    this.view = async () => {\r\n      return `<h2>${this.title}</h2>\r\n              ${(this.data === true) ? '<p>' + this.description + '</p>' : ''}`;\r\n    };\r\n\r\n    this.update = async () => {\r\n      let elem = document.querySelector(`#${this.id}`);\r\n      console.log(elem.textContent);\r\n\r\n      let isInit = (elem.textContent.length === 0);\r\n      elem.innerHTML = await this.view();\r\n\r\n      if (isInit) {\r\n        elem.addEventListener('mouseenter', this.meth.showInfo);\r\n        elem.addEventListener('mouseleave', this.meth.hideInfo);\r\n      }\r\n    };\r\n\r\n  }\r\n\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/Info_Block.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/Input_Text.js":
/*!***************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/Input_Text.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { V_Base, helpers } = __webpack_require__(/*! ../../../src/state_manager */ \"./src/state_manager/index.js\");\r\nconst { printButton, clickExec } = helpers;\r\n\r\n\r\nmodule.exports = class Input_Text extends V_Base {\r\n  constructor(props) {\r\n\r\n    super(props);\r\n\r\n\r\n    this.default = props.default || '';\r\n\r\n\r\n    this.meth = {\r\n\r\n      reset: async () => this.state(this.default),\r\n\r\n      input: async (e) => {\r\n        this.data = e.target.value;\r\n        document.querySelector(\"#\" + this.id + \" .dataInfoPart\").innerHTML = this.data;\r\n      },\r\n\r\n      change: async (e) => {\r\n        this.state(e.target.value);\r\n      }\r\n\r\n    };\r\n\r\n\r\n    this.view = async () => {\r\n\r\n      let btnTempInfo = (this.default == '') ? { icon: '❌', text: 'Clear', action: \"reset\" } : { icon: '🌀', text: 'Reset [' + this.default + ']', action: \"reset\" };\r\n\r\n      let btnInfo = await printButton(btnTempInfo);\r\n\r\n      return `<info>\r\n                <h3 class=\"comp_id\">\r\n                  <p>➿ ID : <span>${this.id}</span></p>\r\n                  <p>📦 Class : <span>${await this.type()}</span></p>\r\n                </h3>\r\n                <h3 class=\"dataInfoPart\">${this.data}</h3>\r\n              </info>\r\n              <actions>\r\n                <input type=\"text\" value=\"${this.data}\" name=\"userInput\" />\r\n                ${(this.data != this.default) ? btnInfo : ''}\r\n              </actions>`;\r\n    };\r\n\r\n\r\n    this.addEvents = async () => {\r\n\r\n      if (this.data != this.default) clickExec(`#${this.id} [action=\"reset\"]`, this.meth.reset);\r\n\r\n      document.querySelector(`#${this.id} [name=\"userInput\"]`).addEventListener('input', this.meth.input);\r\n      document.querySelector(`#${this.id} [name=\"userInput\"]`).addEventListener('change', this.meth.change);\r\n\r\n      //await clickExec(`#${this.id} [action=\"reset\"]`, this.meth.reset);\r\n\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(`#${this.id}`).innerHTML = await this.view();\r\n      await this.addEvents();\r\n    };\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/Input_Text.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/VApplication.js":
/*!*****************************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/VApplication.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { vStore, V_Base } = (__webpack_require__(/*! ../../../src */ \"./src/index.js\").stateManager);\r\nconst { initView } = vStore;\r\n\r\nmodule.exports = class VApplication extends V_Base {\r\n\r\n  constructor(props = {}) {\r\n\r\n    super(props);\r\n\r\n    this.view = async () => {\r\n      return `${await initView('V_AppHeader01')}\r\n              <main>\r\n                ${this.data}\r\n              </main>\r\n              ${await initView('V_AppFooter01')}`;\r\n    };\r\n\r\n    this.update = async () => {\r\n      document.querySelector(this.id).innerHTML = await this.view();\r\n    };\r\n\r\n    this.run = async () => {\r\n      console.log(vStore);\r\n\r\n      this.data = `${await initView('number_demo_elem')}\r\n                    ${await initView('Application_AltComp')}\r\n                    ${await initView('Application_Component_Base')}\r\n                    ${await initView('its_over_9000')}\r\n                    ${await initView('ANA_EXAMPLE')}\r\n                    ${await initView('txtCP')}\r\n                    ${await initView('emptyValTest')}\r\n                    ${await initView('more_things_to_mess')}`;\r\n\r\n      await this.update();\r\n      await vStore.init();\r\n\r\n    };\r\n\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/VApplication.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/Class/index.js":
/*!**********************************************!*\
  !*** ./__tests__/Web_Demo_01/Class/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n\r\n  VApplication: __webpack_require__(/*! ./VApplication */ \"./__tests__/Web_Demo_01/Class/VApplication.js\"),\r\n\r\n  App_Footer: __webpack_require__(/*! ./App_Footer */ \"./__tests__/Web_Demo_01/Class/App_Footer.js\"),\r\n  App_Header: __webpack_require__(/*! ./App_Header */ \"./__tests__/Web_Demo_01/Class/App_Header.js\"),\r\n  Info_Block: __webpack_require__(/*! ./Info_Block */ \"./__tests__/Web_Demo_01/Class/Info_Block.js\"),\r\n\r\n  App_Navigation: __webpack_require__(/*! ./App_Navigation */ \"./__tests__/Web_Demo_01/Class/App_Navigation.js\"),\r\n\r\n  Counter_Demo: __webpack_require__(/*! ./Counter_Demo */ \"./__tests__/Web_Demo_01/Class/Counter_Demo.js\"),\r\n  Input_Text: __webpack_require__(/*! ./Input_Text */ \"./__tests__/Web_Demo_01/Class/Input_Text.js\"),\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/Class/index.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/components/index.js":
/*!***************************************************!*\
  !*** ./__tests__/Web_Demo_01/components/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst {\r\n  VApplication,\r\n  Counter_Demo,\r\n  Input_Text,\r\n  App_Footer,\r\n  App_Header,\r\n  App_Navigation,\r\n  Info_Block\r\n} = __webpack_require__(/*! ../Class */ \"./__tests__/Web_Demo_01/Class/index.js\");\r\n\r\n\r\nmodule.exports = components = {\r\n\r\n  vApp: new VApplication({ id: \"v_app\" }),\r\n\r\n\r\n  appHeader: new App_Header({ id: \"V_AppHeader01\", }),\r\n\r\n  appHeadInfoBlock: new Info_Block({ id: \"appHeadInfoBlock\", title: \"🚀 Vc9 - State_Manager\", description: \"Some Random Text to Fill in the space.\" }),\r\n\r\n  appFooter: new App_Footer({ id: \"V_AppFooter01\" }),\r\n\r\n  appNavigation: new App_Navigation({ id: \"mainHeadNav01\", data: false }),\r\n\r\n\r\n  number_demo_elem: new Counter_Demo({ id: \"number_demo_elem\", data: 50, default: 0 }),\r\n  altUsage: new Counter_Demo({ id: \"Application_AltComp\", data: 50, default: 0 }),\r\n  app_2: new Counter_Demo({ id: \"Application_Component_Base\", data: 1250, default: 500 }),\r\n  its_over_9000: new Counter_Demo({ id: \"its_over_9000\", data: 9999, default: 9999 }),\r\n\r\n\r\n  ANA_EXAMPLE: new Input_Text({ id: \"ANA_EXAMPLE\", data: \"ANA_EXAMPLE\", default: \"ANA_EXAMPLE\" }),\r\n  txtCP: new Input_Text({ id: \"txtCP\", data: \"Starting String Value\", default: \"\" }),\r\n  more_things_to_mess: new Input_Text({ id: \"more_things_to_mess\", data: \"Example String INIT Value.\", default: \"more_things_to_mess\" }),\r\n  emptyValueTest: new Input_Text({ id: \"emptyValTest\", data: \"Example String INIT Value.\", default: \"          \" }),\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/components/index.js?");

/***/ }),

/***/ "./__tests__/Web_Demo_01/index.js":
/*!****************************************!*\
  !*** ./__tests__/Web_Demo_01/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { vApp } = __webpack_require__(/*! ./components */ \"./__tests__/Web_Demo_01/components/index.js\");\r\n\r\nvApp.run();\r\n\n\n//# sourceURL=webpack://-v-/./__tests__/Web_Demo_01/index.js?");

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

eval("const vStore = __webpack_require__(/*! ./vStore */ \"./src/sm2/core/vStore.js\");\r\n\r\n\r\nmodule.exports = class V_Base {\r\n\r\n  constructor(data) {\r\n\r\n    this.id = data.id || null;\r\n\r\n    this.data = data.data || null;\r\n\r\n    this.view = data.view || (async () => {\r\n      console.log(`[${await this.type()}]#${this.id}.view()`);\r\n      return JSON.stringify(this.data);\r\n    });\r\n\r\n\r\n\r\n    //! Get Type / Constructor Name\r\n    this.type = async () => this.constructor.name;\r\n\r\n    this.class = async () => this.type();\r\n\r\n\r\n    this.update = async () => {\r\n      console.log(`[${await this.type()}]#${this.id}.update()`);\r\n      let selector = `${this.constructor.name || ''}#${this.id}`;\r\n\r\n      let elem = document.querySelector(selector);\r\n\r\n      if (elem) elem.innerHTML = await this.view();\r\n    };\r\n\r\n\r\n    this.state = async (value) => {\r\n      console.log(`[${await this.type()}]#${this.id}.state( ${value} )`);\r\n\r\n      if (value == undefined) return null;\r\n\r\n      if (typeof value === 'object') {\r\n        Object.keys(value).forEach(key => {\r\n          this.data[key] = value[key];\r\n        });\r\n      } else {\r\n        this.data = value;\r\n      }\r\n\r\n      await this.update();\r\n    };\r\n\r\n    //! Print HTML Component Root Element\r\n    //* Element Container that will contain data/view\r\n    this.init = async () => {\r\n      console.log(`[${await this.type()}]#${this.id}.init( ${this.id} )`);\r\n      let itemType = await this.type();\r\n      return `<${itemType} id=\"${this.id}\"></${itemType}>`;\r\n    };\r\n\r\n    vStore.add(this);\r\n\r\n    return this;\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://-v-/./src/sm2/core/V_Base.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./__tests__/Web_Demo_01/index.js");
/******/ 	
/******/ })()
;