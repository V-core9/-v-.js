const { V_Base_Component } = require('../../../../src/state_manager');

const { printButton, clickExec } = require("../../../../src/state_manager/helpers");

/*
 * txtCP ::Text Variable Example
 */
const txtCP = new V_Base_Component({

  // Just to be able to navigate it easier [id]
  id: "Text_Component_Base",


  data: "Example String INIT Value.",


  view: async () => {
    return `<info>
              <h3>${txtCP.id}</h3>
              <h3 class="dataInfoPart">${txtCP.data}</h3>
            </info>
            <actions>
              ${await printButton("❌ Clear String Value", "clearValue")}
              ${await printButton('🔝 "XBC1"', "setTo")}
              ${await printButton("⛑ Reset Changes", "reset")}
            </actions>`;
  },


  meth: {
    clearValue: () => txtCP.state(""),
    xbc1: () => txtCP.state("XBC1"),
    reset: () => txtCP.state("Example String INIT Value."),
  },


  update: async () => {
    document.querySelector(`#${txtCP.id}`).innerHTML = await txtCP.view();
    clickExec("#" + txtCP.id + " .clearValue", txtCP.meth.clearValue );
    clickExec("#" + txtCP.id + " .setTo", txtCP.meth.xbc1 );
    clickExec("#" + txtCP.id + " .reset", txtCP.meth.reset );
  },

});


module.exports = txtCP;
