const { vStore, V_Base } = require("../../../../../src/").stateManager;
const { initView } = vStore;

module.exports = class V_Root_Application extends V_Base {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "v_app";
    props.data = props.data || {};

    super(props);

    this.view = async () => {
      return `${await initView('V_AppHeader01')}
              <main>
                ${this.data}
              </main>
              ${await initView('V_AppFooter01')}`;
    };

    this.update = async () => {
      document.querySelector(this.id).innerHTML = await this.view();
    };

    this.run = async () => {
      console.log(vStore);

      this.data = `${await initView('number_demo_elem')}
                    ${await initView('Application_AltComp')}
                    ${await initView('Application_Component_Base')}
                    ${await initView('its_over_9000')}
                    ${await initView('ANA_EXAMPLE')}
                    ${await initView('txtCP')}
                    ${await initView('more_things_to_mess')}`;

      await this.update();
      await vStore.init();

    };

  }

};
