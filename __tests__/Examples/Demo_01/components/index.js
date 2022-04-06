
const { V_Root_Application, Counter_Demo, Text_Input_Demo, App_Footer, App_Header, App_Navigation, App_InfoBlock } = require("./classes/");


module.exports = components = {

  v_app: new V_Root_Application({ id: "v_app" }),


  appHeader: new App_Header({ id: "V_AppHeader01", }),

  appHeadInfoBlock: new App_InfoBlock({ id: "appHeadInfoBlock", title: "🚀 Vc9 - State_Manager", description: "Some Random Text to Fill in the space." }),

  appFooter: new App_Footer({ id: "V_AppFooter01" }),

  appNavigation: new App_Navigation({ id: "mainHeadNav01" }),


  number_demo_elem: new Counter_Demo({ id: "number_demo_elem", data: 50, default: 0 }),
  altUsage: new Counter_Demo({ id: "Application_AltComp", data: 50, default: 0 }),
  app_2: new Counter_Demo({ id: "Application_Component_Base", data: 1250, default: 500 }),
  its_over_9000: new Counter_Demo({ id: "its_over_9000", data: 9999, default: 9999 }),


  ANA_EXAMPLE: new Text_Input_Demo({ id: "ANA_EXAMPLE", data: "ANA_EXAMPLE", default: "ANA_EXAMPLE" }),
  txtCP: new Text_Input_Demo({ id: "txtCP", data: "Starting String Value", default: "" }),
  more_things_to_mess: new Text_Input_Demo({ id: "more_things_to_mess", data: "Example String INIT Value.", default: "more_things_to_mess" }),

};
