const vStore = require('./vStore');


module.exports = class V_Base {

  constructor(data) {

    this.id = data.id || null;

    this.data = data.data || null;

    this.view = data.view || (() => console.log("Component ID : " + this.id +" ; MISSING VIEW METHOD." ));

    this.update = data.update || null;

    this.state = async (value) => {
      this.data = value;
      await this.update();
    };


    //! Get Type / Constructor Name
    this.type = async () => this.constructor.name;

    this.class = async () => this.type();

    //! Print HTML Component Root Element
    //* Element Container that will contain data/view
    this.init = async () => {
      let itemType = await this.type();
      return `<${itemType} id="${this.id}"></${itemType}>`;
    };

    vStore.add(this);

    return this;
  }

};
