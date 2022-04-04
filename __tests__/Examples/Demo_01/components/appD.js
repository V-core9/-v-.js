const { V_Base_Component } = require('../../../../src/state_manager/');

const { printButton, clickExec } = require("../../../../src/state_manager/helpers");


/*
 * appD :: Sample Application Demo
 */
module.exports = appD = new V_Base_Component({

  // Just to be able to navigate it easier [id]
  id: "Application_AltComp",

  data: 10,


  //! Methods that are runnable for this Component.
  meth: {
    increment: async () => appD.state(appD.data + 1),
    decrement: async () => appD.state(appD.data - 1),
    set4: async () => appD.state(44),
  },

  view: async () => {
    return `<info>
              <h3>${appD.id}</h3>
              <h3 class="dataInfoPart">${appD.data}</h3>
            </info>
            <actions>
              ${await printButton('Set Static Value [ -1111 ]', "min")}
              ${await printButton('🔼 Increment', "inc")}
              ${await printButton('🔻 Decrement', "dec")}
            </actions>`;
  },

  update: async () => {
    document.querySelector(`#${appD.id}`).innerHTML = await appD.view();

    clickExec("#" + appD.id + " .min", appD.meth.set4);
    clickExec("#" + appD.id + " .inc", appD.meth.increment);
    clickExec("#" + appD.id + " .dec", appD.meth.decrement);
  },

});


module.exports = appD;
