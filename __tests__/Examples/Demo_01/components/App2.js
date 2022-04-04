const { printButton, clickExec } = require("../../../../src/state_manager/helpers");
const { V_Base } = require('../../../../src/state_manager/core');


/*
 * App2 :: Application V2
 */

module.exports = App2 = new V_Base({

  // Just to be able to navigate it easier [.id]
  id: "Application_Component_Base",

  // Some Example Value to Play With [.data]
  data: 1240,

  // This is where we actually render HTML that will be printed. [.view()]
  view: async () => {
    return `<info>
              <h3>${App2.id}</h3>
              <h3 class="dataInfoPart">${App2.data}</h3>
            </info>
            <actions>
              ${await printButton('Set [1]', "set1", () => App2.state(1))}
              ${await printButton('Set [4]', "set4", () => App2.state(4))}
              ${await printButton('🔼 Increment', "inc", () => App2.state(App2.data + 1))}
              ${await printButton('🔻 Decrement', "dec", () => App2.state(App2.data - 1))}
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
