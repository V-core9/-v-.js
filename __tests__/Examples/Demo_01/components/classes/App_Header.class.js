const { v_components, V_Base_Component } = require("../../../../../src/state_manager");


module.exports = class V_App_Header extends V_Base_Component {

  constructor(props = {}) {

    // Just to be able to navigate it easier [id]
    props.id = props.id || "V_App_Header";
    props.data = props.data || "";

    super(props);

    this.meth = {};

    this.view = async () => {
      return `<h1> 📦 State Management </h1>`;
    };

    this.update = async () => {
      document.querySelector(`#${this.id}`).innerHTML = await this.view();
    };


    this.initView = async () => {
      return `<header id="${this.id}" ></header>`;
    };

  }


};
