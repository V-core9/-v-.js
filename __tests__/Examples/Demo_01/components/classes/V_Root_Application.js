const { v_components, V_Base } = require("../../../../../src/state_manager");
const { initView, render } = v_components;

module.exports = class V_Root_Application extends V_Base {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "v_app";
    props.data = props.data || {};

    super(props);

    this.view = async () => {
      return `${await initView('V_AppHeader01')}
              ${this.data}
              ${await initView('V_AppFooter01')}`;
    };

    this.update = async () => {
      document.querySelector(this.id).innerHTML = await this.view();
    };

    this.init = async () => {

      this.data = `<main>
                    ${await initView('number_demo_elem')}
                    ${await initView('Application_AltComp')}
                    ${await initView('Application_Component_Base')}
                    ${await initView('its_over_9000')}
                    ${await initView('ANA_EXAMPLE')}
                    ${await initView('txtCP')}
                    ${await initView('more_things_to_mess')}
                   </main>`;

      await this.update();
      await v_components.init();
    };

  }

};
