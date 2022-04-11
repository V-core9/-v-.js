const { vcsErrors } = require("../helpers");


module.exports = class V_Store {

  constructor(data) {
    this._list = {};


    this.getAll = async () => {
      return this._list;
    };


    this.get = async (componentName = null) => {
      return this._list[componentName];
    };


    this.add = async (vComponent) => {
      this._list[vComponent.id] = vComponent;
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



    this.type = async () => this.constructor.name;


    this.purge = async () => {
      this._list = {};
    };



    this.initAll = async () => {

      const compNames = Object.keys(this._list);

      for (let i = 0; i < compNames.length; i++) {
        await this._list[compNames[i]].update();
      }

    };

    this.initItem = async (compName) => {
      return await this._list[compName].init() || false;
    };

    return this;
  }

};
