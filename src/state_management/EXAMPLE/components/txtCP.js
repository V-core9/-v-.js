const { printButton, clickExec } = require("../../helpers");
const { V_Base } = require('../../core');

/*
 * txtCP ::Text Variable Example
 */
const txtCP = new V_Base({

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

  update: async () => {
    document.querySelector(`#${txtCP.id}`).innerHTML = await txtCP.view();
    clickExec("#" + txtCP.id + " .clearValue", () => txtCP.state(""));
    clickExec("#" + txtCP.id + " .setTo", () => txtCP.state("XBC1"));
    clickExec("#" + txtCP.id + " .reset", () => txtCP.state("Example String INIT Value."));
  },

});

module.exports = txtCP;
