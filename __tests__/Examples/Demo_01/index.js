const { v_app } = require("./components");
const { v_components } = require("../../../src/state_manager");

(async () => {

  console.log(v_components);
  await v_app.init();

})();
