const { sm2, isDev } = require("../../../src");
const { vStore, V_Base, helpers } = sm2;
const { clickExec } = helpers;

module.exports = class App extends V_Base {

  constructor(props = {}) {

    super(props);

    if(isDev) console.log(this);

    this.meth = {

      load: async () => {
        if(isDev) console.log(this);
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
        if(isDev) console.log(this);
        this.data.currentPage = "home";
        await this.meth.load();
      },

      about: async () => {
        if(isDev) console.log(this);
        this.data.currentPage = "about";
        await this.meth.load();
      },

      demo: async () => {
        if(isDev) console.log(this);
        this.data.currentPage = "demo";
        await this.meth.load();
      }

    };


    this.events = async () => {
      await clickExec(this.id + " #home", this.meth.home);
      await clickExec(this.id + " #about", this.meth.about);
      await clickExec(this.id + " #demo", this.meth.demo);
    };


    this.view = async () => {
      if(isDev) console.log(this);
      return `${await this.data.header.init()}
              ${await this.data.body.init()}
              ${await this.data.footer.init()}

              <button id='home'>Home</button>
              <button id='about'>About</button>
              <button id='demo'>Demo</button>
              `;
    };


    if(isDev) console.log(this);
    window.addEventListener("load", this.meth.load);

  }

};
