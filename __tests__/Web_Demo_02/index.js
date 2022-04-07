
const Application = require("./Class/Application");
const Text_Sample = require("./Class/Text_Sample");
const Page_Focused_Status = require("./Class/Page_Focused_Status");

//! 2 header elements
new Text_Sample({
  id: "appHeader",
  data: "Application Demo Header Content"
});

new Page_Focused_Status({
  id: "appHeaderAlt",
});


//! 2 body elements
new Page_Focused_Status({
  id: "appBody"
});

new Page_Focused_Status({
  id: "appBodyAlt"
});


//! 2 footer elements
new Text_Sample({
  id: "appFooter",
  data: "FOOTER Demo YEA Content"
});

new Page_Focused_Status({
  id: "appFooterAlt",
});



//! Application component with few pages that use id of the component to load it.
new Application({
  id: "app",
  data: {
    pages: {
      home: {
        header: "appHeader",
        body: "appBody",
        footer: "appFooter",
      },
      about: {
        header: "appHeaderAlt",
        body: "appBodyAlt",
        footer: "appFooterAlt",
      },
      demo: {
        header: "appBody",
        body: "appHeader",
        footer: "appHeaderAlt",
      },
    },
    currentPage: "home",
  }
});


