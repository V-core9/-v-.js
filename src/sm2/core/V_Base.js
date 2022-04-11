const { isDev } = require('../../');


const V_Store = require('./V_Store');
const vStore = new V_Store();


class V_Base {

  constructor(data) {

    this.id = data.id || null;


    this.data = data.data || {};


    this.events = data.events || null;


    this.view = data.view || (async () => {
      if (isDev) console.log(`[${await this.type()}]#${this.id}.view()`);
      return JSON.stringify(this.data);
    });


    //! Get Type / Constructor Name
    this.type = async () => this.constructor.name;

    this.class = async () => this.type();



    this.update = async () => {
      let elem = document.querySelector(`${await this.type()}#${this.id}`);
      if (elem) elem.innerHTML = await this.view();
    };



    this.state = async (value) => {
      if (isDev) console.log({ class: await this.type(), id: this.id, state: JSON.stringify(value) });

      if (value == undefined) return null;

      if (typeof value === 'object') {
        Object.keys(value).forEach(key => {
          this.data[key] = value[key];
        });
      } else {
        this.data = value;
      }

      await this.update();

      if (typeof this.events === 'function') this.events();
    };



    //! Print HTML Component Root Element
    //* Element Container that will contain data/view
    this.init = async () => {

      if (isDev) console.log(`[${await this.type()}]#${this.id}.init( ${this.id} )`);

      let itemType = await this.type();
      return `<${itemType} id="${this.id}"></${itemType}>`;

    };



    vStore.add(this);

    return this;

  }

}



module.exports = {

  vStore: vStore,

  V_Base: V_Base,

};
