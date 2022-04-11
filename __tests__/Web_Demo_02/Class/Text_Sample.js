const { sm2, isDev } = require("../../../src");
const { V_Base } = sm2;


module.exports = class Text_Sample extends V_Base {
  constructor(props = {}) {
    super(props);
    if (isDev) console.log(this);
  }
};
