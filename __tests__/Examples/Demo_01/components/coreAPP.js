const { V_Base_Component, helpers } = require("../../../../src/state_manager/");


/*
 * coreAPP :: Sample Application Demo
 */
module.exports = coreAPP = new V_Base_Component({

  // Just to be able to navigate it easier [id]
  id: "CoreAppID",

  data: "Core App",

  view() {
    return `<header>
              <h1>📦 State Management</h1>
            </header>

            <main>
              <div id="Application_Component_Base" class="baseElem"></div>
              <div id="Application_AltComp" class="baseElem"></div>
              <div id="Sample_Item_Component_Base" class="baseElem"></div>
              <div id="Text_Component_Base" class="baseElem"></div>
            </main>

            <footer>
              <p>Footer Placeholder Text just to take some space.</p>
            </footer>`;
  },

  update() {
    document.querySelector(`#${coreAPP.id}`).innerHTML = coreAPP.view();
  },

});
