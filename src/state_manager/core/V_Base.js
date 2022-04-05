const v_components = require('./v_components');


module.exports = class V_Base {

  constructor(data) {

    this.id = data.id || "v_app";

    this.data = data.data || {};

    this.meth = data.meth || {};

    this.view = data.view || (async () => console.log("Missing VIEW() Method"));

    this.update = data.update || (async () => console.log("Missing UPDATE() Method"));

    this.state = async (value) => {
      this.data = value;
      await this.update();
    };

    this.type = async () => (this.constructor.name || null);

    this.initView = async () => {
      return `<base_elem id="${this.id}"></base_elem>`;
    };

    v_components.add(this);

    return this;
  }

};
