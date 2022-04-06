const { V_Base } = require("../../../../../src/state_manager");

module.exports = class App_Footer extends V_Base {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "V_App_Footer";
    props.data = props.data || true;

    super(props);


    this.meth = {

      blur: async () => {
        await this.state(false);
      },

      focus: async () => {
        await this.state(true);
      },

    };


    this.view = async () => {
      return `<p>Page Focus:  ${(this.data === true) ? "🟢 TRUE" : " 🔻 FALSE"}</p>`;
    };


    this.update = async () => {
      document.querySelector(`#${this.id}`).innerHTML = await this.view();
    };

    window.addEventListener('blur', this.meth.blur);
    window.addEventListener('focus', this.meth.focus);
    window.addEventListener('load', this.meth[(document.hasFocus()) ? "focus" : "blur"]);


  }

};
