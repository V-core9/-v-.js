
const { V_Root_Application, Counter_Demo, Text_Input_Demo } = require("./classes/");


module.exports = components = {


  root_app: new V_Root_Application(),



  number_demo_elem: new Counter_Demo({ id: "number_demo_elem", data: 50, default: 0 }),

  altUsage: new Counter_Demo({ id: "Application_AltComp", data: 50, default: 0 }),

  app_2: new Counter_Demo({ id: "Application_Component_Base", data: 1250, default: 500 }),

  its_over_9000: new Counter_Demo({ id: "its_over_9000", data: 9999, default: 9999 }),



  ANA_EXAMPLE: new Text_Input_Demo({ id: "ANA_EXAMPLE", data: "ANA_EXAMPLE", default: "ANA_EXAMPLE" }),

  txtCP: new Text_Input_Demo({ id: "txtCP", data: "Starting String Value", default: "", }),

  more_things_to_mess: new Text_Input_Demo({ id: "more_things_to_mess", data: "Example String INIT Value.", default: "more_things_to_mess", }),


};
