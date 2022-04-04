const v_components = require('./v_components');

module.exports = function V_Base(data = {}) {

  this.id = data.id || "app";

  this.data = data.data || {};

  this.meth = data.meth || {};

  this.view = data.view || (async () => console.log("Missing VIEW() Method"));

  this.update = data.update || (async () => console.log("Missing UPDATE() Method"));

  this.state = async (value) => {
    this.data = value;
    await this.update();
  };

  this.type = async () => (this.constructor.name || null);

  v_components.add(this);

};
