
const {
  VApplication,
  Counter_Demo,
  Input_Text,
  App_Footer,
  App_Header,
  App_Navigation,
  Info_Block
} = require("../Class");


module.exports = components = {

  vApp: new VApplication({ id: "v_app" }),


  appHeader: new App_Header({ id: "V_AppHeader01", }),

  appHeadInfoBlock: new Info_Block({ id: "appHeadInfoBlock", title: "🚀 Vc9 - State_Manager", description: "Some Random Text to Fill in the space." }),

  appFooter: new App_Footer({ id: "V_AppFooter01" }),

  appNavigation: new App_Navigation({ id: "mainHeadNav01", data: false }),


  number_demo_elem: new Counter_Demo({ id: "number_demo_elem", data: 50, default: 0 }),
  altUsage: new Counter_Demo({ id: "Application_AltComp", data: 50, default: 0 }),
  app_2: new Counter_Demo({ id: "Application_Component_Base", data: 1250, default: 500 }),
  its_over_9000: new Counter_Demo({ id: "its_over_9000", data: 9999, default: 9999 }),


  ANA_EXAMPLE: new Input_Text({ id: "ANA_EXAMPLE", data: "ANA_EXAMPLE", default: "ANA_EXAMPLE" }),
  txtCP: new Input_Text({ id: "txtCP", data: "Starting String Value", default: "" }),
  more_things_to_mess: new Input_Text({ id: "more_things_to_mess", data: "Example String INIT Value.", default: "more_things_to_mess" }),
  emptyValueTest: new Input_Text({ id: "emptyValTest", data: "Example String INIT Value.", default: "          " }),

};
