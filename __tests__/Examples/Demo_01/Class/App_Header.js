const { V_Base,  vStore } = require("../../../../src/state_manager");
const { initView } = vStore;

module.exports = class App_Header extends V_Base {

  constructor(props = {}) {

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
