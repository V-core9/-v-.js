
(async () => {

  require('./components');

  (require('../../../src/state_management/core').vComponents.getAll()).forEach(async (item) => await item.update());

})();
