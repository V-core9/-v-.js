const printButton = async (textVal, className) => {
  return `<button class="${className}">${textVal}</button>`;
};

const clickExec = (selector, callback) => {
  document.querySelector(selector).addEventListener('click', callback);
};


const vComponents = [];

function V_Base(data = {}) {
  this.elemId = data.elemId || "app";

  this.data = data.data || {};

  this.view = data.view || (() => console.log("Missing VIEW() Method"));

  this.update = data.update || (() => console.log("Missing UPDATE() Method"));

  this.state = (value) => {
    this.data = value;
    this.update();
  };

  this.methods = data.methods || {};

  vComponents.push(this);
}



/*
 * coreAPP :: Sample Application Demo
 */
const coreAPP = new V_Base({
  elemId: "CoreAppID",
  data: "Core App",
  view() {
    return `<header>

                <h1>📦 State Management</h1>

              </header>


              <main>

                <div id="APP" class="baseElem"></div>

                <div id="APP_ALT" class="baseElem"></div>

                <div id="SIC" class="baseElem"></div>

                <div id="TextComp" class="baseElem"></div>

              </main>


              <footer>

                <p>Footer Placeholder Text just to take some space.</p>

              </footer>`;
  },
  update() {
    document.getElementById(coreAPP.elemId).innerHTML = coreAPP.view();
  },
});

/*
 * appD :: Sample Application Demo
 */
const appD = new V_Base({

  elemId: "APP_ALT",

  data: 10,

  view: async () => {
    return `<info>

                <h3>Name  : ${appD.elemId}</h3>
                <h3 class="dataInfoPart">${appD.data}</h3>

              </info>


              <actions>

              <button class="min">Set Static Value [ -1111 ]</button>
              <button class="inc" >🔼 INCREMENT</button>
              <button class="dec">🔽 DECREMENT</button>

              </actions>`;
  },

  update: async () => {
    document.getElementById(appD.elemId).innerHTML = await appD.view();

    clickExec("#" + appD.elemId + " .min", () => appD.state(-1111));
    clickExec("#" + appD.elemId + " .inc", () => appD.state(appD.data + 1));
    clickExec("#" + appD.elemId + " .dec", () => appD.state(appD.data - 1));
  },

});

/*
 * App2 :: Application V2
 */
const App2 = new V_Base({

  elemId: "APP",

  data: 1240,

  view: async () => {
    return `<info>
              <h3>Name  : ${App2.elemId}</h3>
              <h3 class="dataInfoPart">${App2.data}</h3>
            </info>
            <actions>
              ${await printButton('Set [11]', "set1")}
              ${await printButton('Set [44]', "set4")}
              ${await printButton('🔼 INCREMENT', "inc")}
              ${await printButton('🔽 DECREMENT', "dec")}
            </actions>`;
  },

  update: async () => {
    document.getElementById(App2.elemId).innerHTML = await App2.view();
    clickExec(`#${App2.elemId} .set1`, () => App2.state(11));
    clickExec(`#${App2.elemId} .set4`, () => App2.state(44));
    clickExec(`#${App2.elemId} .inc`, () => App2.state(App2.data + 1));
    clickExec(`#${App2.elemId} .dec`, () => App2.state(App2.data - 1));
  },

});


/*
 * SIC :: SampleItemComponent
 */
const sic = new V_Base({

  elemId: "SIC",

  data: 50,

  view: async () => {

    return `<info>
              <h3>Name  : ${sic.elemId}</h3>
              <h3 class="dataInfoPart">${sic.data}</h3>
            </info>
            <actions>
              ${await printButton('Set [11]', "sic1")}
              ${await printButton('Set [44]', "sic4")}
              ${await printButton('🔼 INCREMENT', "inc")}
              ${await printButton('🔽 DECREMENT', "dec")}
            </actions>`;
  },

  update: async () => {
    document.getElementById(sic.elemId).innerHTML = await sic.view();
    clickExec(`#${sic.elemId} .sic1`, () => sic.state(11));
    clickExec(`#${sic.elemId} .sic4`, () => sic.state(44));
    clickExec(`#${sic.elemId} .inc`, () => sic.state(sic.data + 1));
    clickExec(`#${sic.elemId} .dec`, () => sic.state(sic.data - 1));
  },

});


/*
 * txtCP ::Text Variable Example
 */
const txtCP = new V_Base({

  elemId: "TextComp",

  data: "Example String INIT Value.",

  view: async () => {
    return `<info>
              <h3>Name  : ${txtCP.elemId}</h3>
              <h3 class="dataInfoPart">${txtCP.data}</h3>
            </info>
            <actions>
              ${await printButton("❌ Clear String Value", "clearValue")}
              ${await printButton('🔝 "XBC1"', "setTo")}
              ${await printButton("⛑ Reset Changes", "reset")}
            </actions>`;
  },

  update: async () => {
    document.getElementById(txtCP.elemId).innerHTML = await txtCP.view();
    clickExec("#" + txtCP.elemId + " .clearValue", () => txtCP.state(""));
    clickExec("#" + txtCP.elemId + " .setTo", () => txtCP.state("XBC1"));
    clickExec("#" + txtCP.elemId + " .reset", () => txtCP.state("Example String INIT Value."));
  },

});


vComponents.forEach(async (item) => await item.update());
