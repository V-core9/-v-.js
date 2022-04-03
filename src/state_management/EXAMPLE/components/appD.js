const { printButton, clickExec } = require("../../helpers");
const { V_Base } = require('../../core');


/*
 * appD :: Sample Application Demo
 */
module.exports = appD = new V_Base({

  id: "Application_AltComp",

  data: 10,

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

    clickExec("#" + appD.id + " .min", () => appD.state(-1111));
    clickExec("#" + appD.id + " .inc", () => appD.state(appD.data + 1));
    clickExec("#" + appD.id + " .dec", () => appD.state(appD.data - 1));
  },

});

