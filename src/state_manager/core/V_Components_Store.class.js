const { vcsErrors } = require("../helpers/");
module.exports = function V_Components_Store(data = {}) {

  this._list = {};

  this.getAll = async () => {
    return this._list;
  };

  this.get = async (componentName = null) => {
    return (typeof componentName === 'string') ? (this._list[componentName] || new Error(vcsErrors.notFound(componentName))) : new Error(vcsErrors.type());
  };

  this.add = async (vComponent) => {
    if (["V_Base", "V_Base_Component"].indexOf(vComponent.type()) === -1) {
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

  this.update = async (componentName, data) => {
    if (typeof componentName === 'string') {
      this.get(componentName).state(data);
    } else {
      throw new Error(vcsErrors.type());
    }
  };

  this.render = async (componentName) => {
    if (typeof componentName === 'string') {
      this.get(componentName).view();
    } else {
      throw new Error(vcsErrors.type());
    }
  };

  this.init = async () => {
    this._list.forEach((v) => v.view());
  };

  this.type = async () => {
    return this.constructor.name;
  };

  this.purge = async () => {
    this._list = {};
  };

  this.destroy = async () => this.purge();


  return this;
};
