

const vComponents = {
  _list: [],

  getAll() { return this._list; },

  get(id) {
    return this._list.find(v => v.id === id);
  },

  add(vComponent) {
    this._list.push(vComponent);
  },

  remove(id) {
    this._list = this._list.filter(v => v.id !== id);
  },

  update(id, data) {
    this.get(id).state(data);
  },

  render(id) {
    this.get(id).view();
  },

  init() {
    this._list.forEach(v => v.view());
  },

  purge() {
    this._list = [];
  }
};



class V_Base  {


  constructor(data) {

    this.id = data.id || "app";

    this.data = data.data || {};

    this.view = data.view || (() => console.log("Missing VIEW() Method"));

    this.update = data.update || (() => console.log("Missing UPDATE() Method"));

    this.state = (value) => {
      this.data = value;
      this.update();
    };

    this.methods = data.methods || {};

    vComponents.add(this);
  }


}



module.exports = {
  V_Base,
  vComponents
};
