const { V_Base } = require("../../../src").sm2;


module.exports = class App extends V_Base {

  constructor(props = {}) {

    super(props);


    this.view = async () => {
      return `${await this.data.header.init()}
              ${await this.data.body.init()}
              ${await this.data.footer.init()}`;
    };


    window.addEventListener("load", async () => {
      await this.update();
      const { header, body, footer } = this.data;
      header.update();
      body.update();
      footer.update();
    });


  }

};
