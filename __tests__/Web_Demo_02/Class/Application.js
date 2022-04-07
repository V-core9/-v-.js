const { vStore, V_Base, helpers } = require("../../../src").sm2;
const { clickExec } = helpers;

module.exports = class App extends V_Base {

  constructor(props = {}) {

    super(props);


    this.meth = {

      load: async () => {
        const currentPage = this.data.pages[this.data.currentPage];

        await this.state({
          header: await vStore.get(currentPage.header),
          body: await vStore.get(currentPage.body),
          footer: await vStore.get(currentPage.footer),
        });

        await this.data.header.update();
        await this.data.body.update();
        await this.data.footer.update();

      },

      home: async () => {
        await this.state({ currentPage: "home" });
        await this.meth.load();
      },

      about: async () => {
        await this.state({ currentPage: "about" });
        await this.meth.load();
      },

      demo: async () => {
        await this.state({ currentPage: "demo" });
        await this.meth.load();
      }

    };


    this.events = async () => {
      await clickExec(this.id + " #home", this.meth.home);
      await clickExec(this.id + " #about", this.meth.about);
      await clickExec(this.id + " #demo", this.meth.demo);
    };


    this.view = async () => {
      return `${await this.data.header.init()}
              ${await this.data.body.init()}
              ${await this.data.footer.init()}

              <button id='home'>Home</button>
              <button id='about'>About</button>
              <button id='demo'>Demo</button>
              `;
    };


    window.addEventListener("load", this.meth.load);

  }

};
