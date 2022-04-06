const { V_Base } = require("../../../src").sm2;


module.exports = class Page_Focused_Status extends V_Base {


  constructor(props = {}) {


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
      return "Page Focused: " + ((this.data === true) ? "🟢" : "❌");
    };


    window.addEventListener('blur', this.meth.blur);
    window.addEventListener('focus', this.meth.focus);
    window.addEventListener('load', this.meth[(document.hasFocus()) ? "focus" : "blur"]);


  }

};
