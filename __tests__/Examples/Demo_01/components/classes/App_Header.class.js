const { V_Base, helpers } = require("../../../../../src/state_manager");
const { printButton, clickExec } = helpers;

module.exports = class V_App_Header extends V_Base {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "V_App_Header";
    props.data = props.data || "";

    super(props);

    this.meth = {
      alertSample: async () => alert("Sample alert"),
      toggleNavigation: async () => alert("Toggle navigation")
    };

    this.view = async () => {
      return `<info>
                <h2>${this.data.title || "Default V_APP_HEADER._.TITLE"}</h2>
                <p>${this.data.description || "Default V_APP_HEADER._.DESCRIPTION"}</p>
              </info>
              <actions>
                ${await printButton({ icon: '⛔', text: 'Alert Sample', action: "alertSample" })}
                ${await printButton({ icon: '⛔', text: 'Open Navigation', action: "toggleNavigation" })}
              </actions>`;
    };

    this.update = async () => {
      document.querySelector(`#${this.id}`).innerHTML = await this.view();

      await clickExec(`#${this.id} [action="alertSample"]`, this.meth.alertSample);
      await clickExec(`#${this.id} [action="toggleNavigation"]`, this.meth.toggleNavigation);

    };


    this.initView = async () => {
      return `<header id="${this.id}" ></header>`;
    };


  }


};
