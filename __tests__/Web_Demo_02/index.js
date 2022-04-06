
const Application = require("./Class/Application");
const Page_Focused_Status = require("./Class/Page_Focused_Status");
const Text_Sample = require("./Class/Text_Sample");


const vApp = new Application({
  id: "app",

  data: {

    header: new Text_Sample({
      id: "appHeader",
      data: "Application Demo Header Content"
    }),

    body: new Page_Focused_Status({
      id: "appBody"
    }),

    footer: new Text_Sample({
      id: "appFooter",
      data: "FOOTER Demo YEA Content"
    })

  }

});


console.log(vApp);
