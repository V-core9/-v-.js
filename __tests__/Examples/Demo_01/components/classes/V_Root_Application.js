const { v_components, V_Base_Component } = require("../../../../../src/state_manager");

module.exports = class V_Root_Application extends V_Base_Component {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "v_app";
    props.data = props.data || true;

    super(props);

    this.meth = {

      blur: async () => {
        await this.state(false);
        v_components.init();
      },

      focus: async () => {
        await this.state(true);
        v_components.init();
      },

    };

    this.view = async () => {
      return `<header>
                <h1>📦 State Management </h1>
              </header>
              <main>
                <div id="number_demo_elem" class="baseElem"></div>
                <div id="Application_Component_Base" class="baseElem"></div>
                <div id="txtCP" class="baseElem"></div>
                <div id="Application_AltComp" class="baseElem"></div>
                <div id="its_over_9000" class="baseElem"></div>
                <div id="ANA_EXAMPLE" class="baseElem"></div>
                <div id="more_things_to_mess" class="baseElem"></div>
              </main>
              <footer>
                <p>Page Focus:  ${(this.data === true) ? "🟢 TRUE" : " 🔻 FALSE"}</p>
              </footer>`;
    };

    this.update = async () => {
      document.querySelector(this.id).innerHTML = await this.view();
    };

    window.addEventListener('blur', this.meth.blur);
    window.addEventListener('focus', this.meth.focus);
    window.addEventListener('load', this.meth[(document.hasFocus()) ? "focus" : "blur"]);

  }

};
