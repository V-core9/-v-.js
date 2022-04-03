const { printButton, clickExec } = require("../../helpers");
const { V_Base } = require('../../core');


/*
 * App2 :: Application V2
 */

module.exports = App2 = new V_Base({

  id: "Application_Component_Base",

  data: 1240,

  view: async () => {
    return `<info>
              <h3>${App2.id}</h3>
              <h3 class="dataInfoPart">${App2.data}</h3>
            </info>
            <actions>
              ${await printButton('Set [11]', "set1")}
              ${await printButton('Set [44]', "set4")}
              ${await printButton('🔼 Increment', "inc")}
              ${await printButton('🔻 Decrement', "dec")}
            </actions>`;
  },

  update: async () => {
    document.querySelector(`#${App2.id}`).innerHTML = await App2.view();
    clickExec(`#${App2.id} .set1`, () => App2.state(11));
    clickExec(`#${App2.id} .set4`, () => App2.state(44));
    clickExec(`#${App2.id} .inc`, () => App2.state(App2.data + 1));
    clickExec(`#${App2.id} .dec`, () => App2.state(App2.data - 1));
  },

});
