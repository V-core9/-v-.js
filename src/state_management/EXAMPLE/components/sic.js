const { printButton, clickExec } = require("../../helpers");
const { V_Base } = require('../../core');


/*
 * SIC :: Sample_Item_Component_Base
 */
module.exports = sic = new V_Base({

  id: "Sample_Item_Component_Base",

  data: 50,

  view: async () => {

    return `<info>
              <h3>${sic.id}</h3>
              <h3 class="dataInfoPart">${sic.data}</h3>
            </info>
            <actions>
              ${await printButton('Set [11]', "sic1")}
              ${await printButton('Set [44]', "sic4")}
              ${await printButton('🔼 Increment', "inc")}
              ${await printButton('🔻 Decrement', "dec")}
            </actions>`;
  },

  update: async () => {
    document.querySelector(`#${sic.id}`).innerHTML = await sic.view();
    clickExec(`#${sic.id} .sic1`, () => sic.state(11));
    clickExec(`#${sic.id} .sic4`, () => sic.state(44));
    clickExec(`#${sic.id} .inc`, () => sic.state(sic.data + 1));
    clickExec(`#${sic.id} .dec`, () => sic.state(sic.data - 1));
  },

});
