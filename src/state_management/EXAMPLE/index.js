
(async () => {

  require('./components');

  (require('../core').vComponents.getAll()).forEach(async (item) => await item.update());

})();
