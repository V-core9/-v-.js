const { V_Base, helpers, vStore } = require("../../../../../src/state_manager");
const { initView } = vStore;

module.exports = class App_InfoBlock extends V_Base {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "V_App_InfoBlock";
    props.data = props.data || false;

    super(props);

    this.title = props.title || "Missing App_InfoBlock Title";
    this.description = props.description || "Missing App_InfoBlock Description";

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
