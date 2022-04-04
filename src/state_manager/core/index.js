const vComponents = {
  _list: [],

  getAll: (getAllComponents = async () => {
    return vComponents._list;
  }),

  get: (getComponent = async (id) => {
    return vComponents._list[id] || null;
  }),

  add: (addComponent = async (vComponent) => {
    vComponents._list[vComponent.id] = vComponent;
  }),

  remove: (removeComponent = async (id) => {
    vComponents._list = vComponents._list.filter((v) => v.id !== id);
  }),

  update: (updateComponent = async (id, data) => {
    vComponents.get(id).state(data);
  }),

  render: (render = async (id) => {
    vComponents.get(id).view();
  }),

  init: startAction = async () => {
    vComponents._list.forEach((v) => v.view());
  },

  purge: (purge = async () => {
    vComponents._list = [];
  }),
};

class V_Base {
  constructor(data) {
    this.id = data.id || "app";

    this.data = data.data || {};

    this.view = data.view || (async () => console.log("Missing VIEW() Method"));

    this.update =
      data.update || (async () => console.log("Missing UPDATE() Method"));

    this.state = async (value) => {
      this.data = value;
      await this.update();
    };

    this.methods = data.methods || {};

    vComponents.add(this);
  }
}

module.exports = {
  V_Base,
  vComponents,
};
