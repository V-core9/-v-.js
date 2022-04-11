const { sm2, isDev } = require("../../../src");
const { V_Base } = sm2;

module.exports = class Page_Focused_Status extends V_Base {


  constructor(props = {}) {


    super(props);


    this.meth = {

      blur: async () => {
        if (isDev) console.log(this);
        await this.state(false);
      },

      focus: async () => {
        if (isDev) console.log(this);
        await this.state(true);
      },

    };

    this.view = async () => {
      if (isDev) console.log(this);
      return "Page Focused: " + ((this.data === true) ? "🟢" : "❌");
    };


    window.addEventListener('blur', this.meth.blur);
    window.addEventListener('focus', this.meth.focus);
    window.addEventListener('load', this.meth[(document.hasFocus()) ? "focus" : "blur"]);


  }

};
