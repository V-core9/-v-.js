(async () => {

  require("./components");

  const { v_components } = require("../../../src/state_manager");

  const listOfComponents = await v_components.getAll();

  console.log(listOfComponents);

  const keyItems = Object.keys(listOfComponents);
  keyItems.forEach(async (item) => await listOfComponents[item].update());

})();
