const { V_Base, helpers, vStore } = require("../../../../../src/state_manager");
const { initView } = vStore;

module.exports = class App_Header extends V_Base {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "V_App_Header";
    props.data = props.data || false;

    super(props);

    this.view = async () => {
      return `${await initView('appHeadInfoBlock')}
              ${await initView('mainHeadNav01')}`;
    };

    this.update = async () => {
      document.querySelector(`#${this.id}`).innerHTML = await this.view();
    };

  }


};
