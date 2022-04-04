const vComponents = {
  _list: {},

  getAll: async () => {
    return vComponents._list;
  },

  get: async (id) => {
    return vComponents._list[id] || null;
  },

  add: async (vComponent) => {
    vComponents._list[vComponent.id] = vComponent;
  },

  remove: async (id) => {
    vComponents._list = vComponents._list.filter((v) => v.id !== id);
  },

  update: async (id, data) => {
    await vComponents.get(id).state(data);
  },

  render: async (id) => {
    await vComponents.get(id).view();
  },

  init: async () => {
    vComponents._list.forEach((v) => v.view());
  },

  purge: async () => {
    vComponents._list = {};
  },
};

class V_Base {
  constructor(data) {
    this.id = data.id || "app";

    this.data = data.data || {};

    this.meth = data.meth || {};

    this.view = data.view || (async () => console.log("Missing VIEW() Method"));

    this.update = data.update || (async () => console.log("Missing UPDATE() Method"));

    this.state = async (value) => {
      this.data = value;
      await this.update();
    };

    vComponents.add(this);
  }
}

module.exports = {
  V_Base,
  vComponents,
};
