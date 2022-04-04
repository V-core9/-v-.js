(async () => {
  require("./components");

  const { vComponents } = require("../../../src/state_manager");

  const listOfComponents = await vComponents.getAll();

  console.log(listOfComponents);

  const keyz = Object.keys(listOfComponents);

  keyz.forEach(async (item) => await listOfComponents[item].update());
})();
