const { V_Base_Component, helpers } = require("../../../../../src/state_manager");
const { printButton, clickExec } = helpers;


module.exports = class Counter_Demo extends V_Base_Component {
  constructor(props) {

    props.id = props.id || "Counter_Demo";
    props.data = props.data || null;

    super(props);

    this.default = props.default || 0;

    this.meth = {
      reset: async () => this.state(this.default),
      increment: async () => this.state(this.data + 1),
      decrement: async () => this.state(this.data - 1),
    };

    this.view = async () => {

      return `<info>
                <h3 class="comp_id">➿ ID:\n <span>${this.id}</span></h3>

                <h3 class="dataInfoPart">
                  ${(this.data != this.default) ? await printButton('❌', "reset") : ""}
                  <p>${this.data}</p>
                </h3>

              </info>
              <actions>
                ${await printButton('🔼 Increment', "inc")}
                ${await printButton('🔻 Decrement', "dec")}
              </actions>`;
    };


    this.update = async () => {

      document.querySelector(`#${this.id}`).innerHTML = await this.view();

      if (this.data != this.default) clickExec(`#${this.id} .reset`, this.meth.reset);

      clickExec(`#${this.id} .inc`, this.meth.increment);
      clickExec(`#${this.id} .dec`, this.meth.decrement);

    };


  }

};
