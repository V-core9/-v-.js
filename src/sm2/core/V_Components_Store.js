const { vcsErrors } = require("../helpers/");


module.exports = class V_Components_Store {

  constructor(data) {
    this._list = {};


    this.getAll = async () => {
      return this._list;
    };


    this.get = async (componentName = null) => {
      return this._list[componentName];
    };


    this.add = async (vComponent) => {
      if (["V_Base", "V_Base"].indexOf(vComponent.type()) === -1) {
        this._list[vComponent.id] = vComponent;
      } else {
        throw new Error(vcsErrors.notInstance());
      }
    };


    this.remove = async (componentName) => {
      if (typeof componentName === 'string') {
        this._list = this._list.filter((v) => v.name !== componentName);
      } else {
        throw new Error(vcsErrors.type());
      }
    };


    this.update = async (componentName) => {
      if (typeof componentName === 'string') {
        await (await this.get(componentName)).update();
      } else {
        throw new Error(vcsErrors.type());
      }
    };


    this.render = async (componentName) => {
      if (typeof componentName === 'string') {
        await (await this.get(componentName)).update();
      } else {
        throw new Error(vcsErrors.type());
      }
    };


    this.type = async () => {
      return this.constructor.name;
    };


    this.purge = async () => {
      this._list = {};
    };


    this.destroy = async () => this.purge();


    this.init = async () => {

      const compNames = Object.keys(this._list);

      for (let i = 0; i < compNames.length; i++) {
        await this._list[compNames[i]].update();
      }

    };

    this.initView = async (compName) => {
      return await this._list[compName].init() || false;
    };

    return this;
  }

};
