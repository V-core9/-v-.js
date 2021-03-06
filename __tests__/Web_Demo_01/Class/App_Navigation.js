const { V_Base, helpers } = require("../../../src/state_manager");
const { printButton, clickExec } = helpers;

module.exports = class App_Navigation extends V_Base {

  constructor(props = {}) {

    super(props);

    this.meth = {
      alertSample: async () => alert("Sample alert"),
      toggleNavigation: async () => this.state(!this.data)
    };

    this.view = async () => {
      return `${await printButton({ icon: '⛔', text: 'Open Navigation', action: "toggleNavigation" })}
              ${(this.data == true) ? await printButton({ icon: '⛔', text: 'Alert Sample', action: "alertSample" }) : ""}
              ${(this.data == true) ? await printButton({ icon: '⛔', text: 'Sec Button', action: "alertSampleAlt" }) : ""}
                    `;
    };

    this.update = async () => {
      document.querySelector(`#${this.id}`).innerHTML = await this.view();

      if (this.data == true) {
        clickExec(`#${this.id} [action="alertSample"]`, this.meth.alertSample);
        clickExec(`#${this.id} [action="alertSampleAlt"]`, this.meth.alertSample);
      }

      clickExec(`#${this.id} [action="toggleNavigation"]`, this.meth.toggleNavigation);

    };

  }


};
