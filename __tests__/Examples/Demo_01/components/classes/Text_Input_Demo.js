const { V_Base, helpers } = require("../../../../../src/state_manager");
const { printButton, clickExec } = helpers;


module.exports = class Text_Input_Demo extends V_Base {
  constructor(props) {

    props.id = props.id || "Text_Input_Demo";
    props.data = props.data || null;

    super(props);

    this.default = props.default || '';


    this.meth = {

      reset: async () => this.state(this.default),

      input: async (e) => {
        this.data = e.target.value;
        document.querySelector("#" + this.id + " .dataInfoPart").innerHTML = this.data;
      },

      change: async (e) => {
        this.state(e.target.value);
      }

    };

    this.view = async () => {

      let btnTempInfo = (this.default == '') ? { icon: '❌', text: 'Clear', action: "reset" } : { icon: '🌀', text: 'Reset [' + this.default + ']', action: "reset" };

      let btnInfo = await printButton(btnTempInfo);

      return `<info>
                <h3 class="comp_id">➿ ID:\n <span>${this.id}</span></h3>
                <h3 class="dataInfoPart">${this.data}</h3>
              </info>
              <actions>
                <input type="text" value="${this.data}" name="userInput" />
                ${(this.data != this.default) ? btnInfo : ''}
              </actions>`;
    };

    this.addEvents = async () => {

      if (this.data != this.default) clickExec(`#${this.id} .reset`, this.meth.reset);

      document.querySelector(`#${this.id} [name="userInput"]`).addEventListener('input', this.meth.input);
      document.querySelector(`#${this.id} [name="userInput"]`).addEventListener('change', this.meth.change);

      await clickExec(`#${this.id} [action="reset"]`, this.meth.reset);

    };

    this.update = async () => {
      document.querySelector(`#${this.id}`).innerHTML = await this.view();
      await this.addEvents();
    };

  }

};
