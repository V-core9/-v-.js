const vStore = require('./vStore');


module.exports = class V_Base {

  constructor(data) {

    this.id = data.id || "v_app";

    this.meth = data.meth || {};

    this.data = data.data || {};

    this.view = data.view || null;

    this.update = data.update || null;

    this.state = async (value) => {
      this.data = value;
      await this.update();
    };

    this.type = async () => this.constructor.name;

    this.class = async () => this.type();

    this.init = async () => {
      let itemType = await this.type();
      return `<${itemType} id="${this.id}"></${itemType}>`;
    };

    vStore.add(this);

    return this;
  }

};
