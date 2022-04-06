const { V_Base, helpers, vStore } = require("../../../src/state_manager");
const { initView } = vStore;

module.exports = class Info_Block extends V_Base {

  constructor(props = {}) {

    super(props);

    this.title = props.title || "Missing Info_Block Title";
    this.description = props.description || "Missing Info_Block Description";

    this.meth = {
      showInfo: async () => this.state(true),
      hideInfo: async () => this.state(false)
    };

    this.view = async () => {
      return `<h2>${this.title}</h2>
              ${(this.data === true) ? '<p>' + this.description + '</p>' : ''}`;
    };

    this.update = async () => {
      let elem = document.querySelector(`#${this.id}`);
      console.log(elem.textContent);

      let isInit = (elem.textContent.length === 0);
      elem.innerHTML = await this.view();

      if (isInit) {
        elem.addEventListener('mouseenter', this.meth.showInfo);
        elem.addEventListener('mouseleave', this.meth.hideInfo);
      }
    };

  }


};
